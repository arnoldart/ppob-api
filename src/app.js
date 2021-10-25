import express from "express";
import { conn } from "../db/conn";

const app = express()

app.use(express.json())


app.listen(3000, () => console.log('Server running on port 3000'))