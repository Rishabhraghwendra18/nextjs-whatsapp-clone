import getPrismaInstance from "../utils/PrismaClient.js";
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
    return records;
}
export async function sendMessage(req,res) {
    try {
        const {from,to,message} = req.body;
        const doesExist = await isRelationShipBetweenUsersExists(from,to);
        if(!doesExist){
            await createRelationShipBetweenUsers(from,to);
        }
        const prismaClient = getPrismaInstance();
        const sentMessage = await prismaClient.message.create({
            data:{
                message,
                receivedOrNot:false,
                senderId:from,
                receiverId:to
            }
        });
        res.json({
            message:"Message Sent Successfully!",
            status:200
        })
    } catch (error) {
        console.log("Error while sending message: ",error);
        res.json({
            message:"Error while sending message",
            status:500
        })
    }
}
export async function getMessage(req,res) {
    const {from,to} = req.body;
    if(!from || !to){
        res.json({
            message:"from or to field missing",
            status:400
        });
        return;
    }
    try {
        const prismaClient = getPrismaInstance();
        const messages = await prismaClient.message.findMany({
            where:{
                OR:[
                    {senderId:from,receiverId:to},
                    {receiverId:from,senderId:to}
                ]
            },
            orderBy:{
                createdAt:"asc",
            }
        })
        res.json({
            messages,
            status:200
        })
    } catch (error) {
        console.log("Error while retreiving message: ",error);
        res.json({
            message:"Error while retreiving message",
            status:500
        })
    }
}