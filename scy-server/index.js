require("dotenv").config();
const express = require('express')
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require('./handlers/error');
const authRoutes = require("./routes/auth");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

app.use((req, res, next)=>{//In case if url doesn't exist we will throw 404
    let err = new Error("Not found");
    err.status = 404;
    next(err);
})

app.use(errorHandler);
app.listen(PORT, ()=>{
    console.log(`Server is starting on port ${PORT}`);
})