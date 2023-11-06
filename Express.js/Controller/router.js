const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hello world");
})

router.get("/about",(req,res)=>{
    res.send("About page");
})

router.get("/contact",(req,res)=>{
    res.send("Contact page");
})

module.exports = router;
