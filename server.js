const express = require('express');
const mongoose = require('mongoose');
const medRoutes = require('./routes/medications')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json())

app.use('/api/medications', medRoutes)

app.get('/', (req,res)=>{
    res.send('backend working!')
});

//console.log("MONGO_URI from env:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(5500, ()=>{
        console.log('server running on port no 5500')
    });
})
.catch(err => console.log(err))