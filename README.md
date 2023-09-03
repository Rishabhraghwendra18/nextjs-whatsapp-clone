# WhatsApp Clone

## About Tech Stack Used
- Firebase - for authentication
- Postgres - for storing messages
- Neo4j (Graph Database) - to create relationship between different users. It also enables us to easily search another user by email
- Express - for backend

## Steps to run
### Server
Step1: cd to server folder and yarn install

Step2: Pull & run postgres image from docker

Step3: log into postgres running container and write below commands

```
psql -h localhost -U postgres
create databse whatsapp
```
`Note: Keep the db password of postgres = 1`

Now server is setuped and work successfully

### Client
Step1: cd to client folder and yarn intall

Step2: Run `npm run dev`

