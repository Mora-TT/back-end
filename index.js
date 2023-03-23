
const express=require('express');
const cors = require('cors');
const HttpStatus = require('http-status');
const dotenv = require('dotenv');

dotenv.config();
const http = require('http');
const routes= require('./router/index');
const app = express();


const Port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());



app.use('/',routes);






app.listen(Port,()=>console.log('listning to port '+Port ));

