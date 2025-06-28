const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require('./routes/user.route')

const app = express();
const PORT = 7000;

app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(express.json());
app.use(routes)
mongoose.connect("mongodb://localhost:27017/User")
.then(()=>{
    console.log("Database connect Successfully!!!!!!");
})
.catch((err)=>{
    console.log("Error", err)
})


app.listen(PORT, ()=>{
    console.log(`app running at port http://localhost:${PORT}`);
})
