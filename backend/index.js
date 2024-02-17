const express = require("express");
const app = express();
require("dotenv").config();
const {dbConnect} = require("./config/db")
const userRoute = require("./route")
const cors = require("cors")

const Port = process.env.PORT || 4000;
dbConnect()

app.use(express.json());
app.use(cors({
    origin: "https://yoga-frontend-cwwu.onrender.com",
    credentials:true
}))

app.get("/",(req,res)=>{
    res.status(200).json("This is home page")
})

app.use("/api", userRoute);

app.listen(Port, ()=>{
    console.log(`App is running on Port no. ${Port}`)
})

