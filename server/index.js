import express from "express"
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


// My COmponents
import Connection from "./database/db.js";
import Routes from "./routes/Route.js";

const app = express();

const port = process.env.PORT || 8000;




app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);



Connection();
app.listen(port, ()=>{
    console.log("Server is listening to the port "+ port);
}) 