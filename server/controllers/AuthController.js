import getPrismaInstance from "../utils/PrismaClient.js";
import {getNeo4JInstance} from "../utils/Neo4j.js";

export async function checkUser(req,res,next){
    try {
        const {email} = req.body;
        if(!email){
            return res.json({msg:"Email is required", status:false});
        }
        const neo4j = getNeo4JInstance();
        const {records} = await neo4j.executeQuery(
            'MATCH (user:USER {email:$email}) RETURN COUNT(user)>0 AS node_exists',
            {email}
        );
        const doesExist = records[0].get('node_exists');
        if(!doesExist){
            return res.json({msg:"User not found", status:false});
        }
        else{
            return res.json({msg:"User Found",status:true,data:records})
        }
    } catch (error) {
        next(error);
    }
}

export async function createProfile(req,res,next){
    try {
        const {email,name} = req.body;
        if(!email || !name){
            res.json({
                messagge:"Please provide email or name",
                status:400
            });
        }
        const neo4j = getNeo4JInstance();
        await neo4j.executeQuery(
            'CREATE (:USER {name: $name,email:$email})',
            {name,email}
        )
        res.json({
            message:"User profile created successfully",
            status:200
        });
    } catch (error) {
        console.log("Error while creating user: ",error);
        res.json({
            message:"Error while creating user",
            status:500
        })
    }
}