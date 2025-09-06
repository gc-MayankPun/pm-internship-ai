
import pg from "pg"
const db = new pg.Client({
  user: "postgres",        
  host: "localhost",       
  database: "hackathon",   
  password: "aqlpmnxc56gh",      
  port: 5432,              
});


db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("DB connection error:", err.message));

export default db;
