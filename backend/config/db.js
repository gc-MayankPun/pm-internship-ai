
import pg from "pg"
const db = new pg.Client({
  user: "postgres",        
  host: "localhost",       
  database: "hackathon",   
  password: "12345678",      
  port: 5432,              
});


db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("DB connection error:", err.message));

export default db;
