import neo4j from 'neo4j-driver';

let neo4jInstance = null;

export function getNeo4JInstance() {
    if(!neo4jInstance){
        const URI = 'neo4j+s://0c47bcc7.databases.neo4j.io';
        const USER = 'neo4j';
        const PASSWORD = process.env.NEO4J_PASSWORD;
        neo4jInstance = neo4j.driver(URI,neo4j.auth.basic(USER,PASSWORD));

    }
    return neo4jInstance;
}