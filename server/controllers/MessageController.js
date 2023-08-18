import {getNeo4JInstance} from "../utils/Neo4j.js";

// this function checks whether the user (from) has previously contacted another user (to)
async function isRelationShipBetweenUsersExists(from,to) {
    const neo4j = getNeo4JInstance();
    const {records} = await neo4j.executeQuery(
        'MATCH (from:USER {email:$from}),(to:USER {email:$to}) RETURN EXISTS((from)-[:CONTACTED]->(to)) as doesExists',
        {from,to}
    );
    return records[0].get('doesExists');
}
async function createRelationShipBetweenUsers(from,to) {
    const neo4j = getNeo4JInstance();
    const {records} = await neo4j.executeQuery(
        'MATCH (from:USER {email:$from}), (to:USER {email:$to}) CREATE (from)-[:CONTACTED]->(to)',
        {from,to}
    );
    console.log(records);
    return records;
}
export async function sendMessage(req,res) {
    try {
        const {from,to,message} = req.body;
        const doesExist = await isRelationShipBetweenUsersExists(from,to);
        if(!doesExist){
            await createRelationShipBetweenUsers(from,to);
        }

    } catch (error) {
        console.log("Error while sending message: ",error);
        res.json({
            message:"Error while sending message",
            status:500
        })
    }
}