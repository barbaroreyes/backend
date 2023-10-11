import express from 'express';
import cors from 'cors';
import {pool} from './db.js'
import{PORT} from './confi.js'




const app = express();
app.use(express.json())
app.use(cors());




app.get('/api/users', async(req,res)=>{
 const result = await pool.query(`select * from users`)
  res.json(result[0]);
   })

   app.post('/api/users', async(req,res)=>{
      
      const result = await pool.query(`insert into users(name)values("Pepe")`)
       res.json(result);
        })

app.listen(PORT,() => console.log('connect on port 4500'))