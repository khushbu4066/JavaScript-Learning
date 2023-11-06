const express = require("express");
const router = require("./Controller/router");

const app = express();
app.use("/routes",router);

app.listen(4000,()=>{
    console.log("Server started at 4000");
})

