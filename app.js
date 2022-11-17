const express = require('express');
const port = 3000;

const app = express();

const db = require('./db');


app.use(express.json())

const userRouter = require('./routes/getUser')

app.use("/getUser", userRouter); 
app.use("/getJobSeekers", require('./routes/getJobSeekers.js')); 
app.get("/test",(req,res)=>{
    console.log("test");
    return res.json({test:"test"});
})
app.listen(port,()=>
    console.log(`Server running at port: ${port}`)
);