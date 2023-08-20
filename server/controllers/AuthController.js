import getPrismaInstance from "../utils/PrismaClient.js";
import { getNeo4JInstance } from "../utils/Neo4j.js";

export async function checkUser(req, res, next) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ msg: "Email is required", status: false });
    }
    const neo4j = getNeo4JInstance();
    const { records } = await neo4j.executeQuery(
      "MATCH (user:USER {email:$email}) RETURN COUNT(user)>0 AS node_exists",
      { email }
    );
    const doesExist = records[0].get("node_exists");
    if (!doesExist) {
      return res.json({ msg: "User not found", status: false });
    } else {
      return res.json({ msg: "User Found", status: true, data: records });
    }
  } catch (error) {
    next(error);
  }
}

export async function createProfile(req, res, next) {
  try {
    const { email, name, image, status } = req.body;
    if (!email || !name) {
      return res.json({
        messagge: "Please provide email or name",
        status: 400,
      });
    }
    const neo4j = getNeo4JInstance();
    await neo4j.executeQuery(
      "CREATE (:USER {name: $name,email:$email,image:$image,status:$status})",
      { name, email, image, status }
    );
    res.json({
      message: "User profile created successfully",
      status: 200,
    });
  } catch (error) {
    console.log("Error while creating user: ", error);
    res.json({
      message: "Error while creating user",
      status: 500,
    });
  }
}
export async function getUser(req, res) {
  const { email } = req.body;
  if (!email) {
    return res.json({
      message: "Please provide email id for user to search",
      status: 400,
    });
    return;
  }
  try {
    const neo4j = getNeo4JInstance();
    const { records } = await neo4j.executeQuery(
      "MATCH (user:USER {email:$email}) RETURN user",
      { email }
    );
    if (!records?.length) {
      res.json({
        message: "User not found",
        status: 404,
      });
      return;
    }
    let user = records[0]?.get("user")?.properties;
    res.json({
      message: "User found",
      status: 200,
      user,
    });
  } catch (error) {
    console.log("Error while searching user: ", error);
    res.json({
      message: "User not found",
      status: 404,
    });
  }
}
export const getUserContacts = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.json({
      message: "Please provide email of user",
      status: 400,
    });
    return;
  }
  try {
    const neo4j = getNeo4JInstance();
    const { records } = await neo4j.executeQuery(
      "MATCH users=(:USER {email:$email})-[:CONTACTED]-(:USER) RETURN users",
      { email }
    );
    let users = records?.map((user) => user?.get("users")["end"]["properties"]);
    res.json({
      users: users,
      status: 200,
    });
  } catch (error) {
    console.log("Error while getting users: ", error);
    res.json({
      message: "Error while getting users",
      status: 500,
    });
  }
};
