const express = require('express'); 
require('dotenv').config();
const pool = require('./db');
const app = express(); 
app.use(express.json()); 
const port = 3000 ; 

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  pool.query('SELECT NOW()')
  .then((res)=>{
    console.log(res.rows[0]);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



