import express from 'express';
import dotenv from 'dotenv' ;
import connectdb from './config/db.js' 
const app = express();
dotenv .config() 
let port = process.env.PORT ;



app.listen(port, () => {
  console.log(`hello Server is running on port ${port}`);
});
