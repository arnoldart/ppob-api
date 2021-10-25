import mysql from 'mysql'
import env from 'dotenv/config'

export const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_ppob"
})

conn.connect((err) => {
  if(err) {
    return console.log('error: ' + err.message)
  }

  console.log('Connected to mysql server')
})