// const express = require("express")
// const app = express();

// // const mongoose = require("mongoose");

// app.use((req, res, next) =>{
//      console.log("Middleware is running");
//      res.send("Middleware is running");
// });

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.get("/random", (req, res) => {
//     res.send("Random page");
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

const express = require("express")
const app = express();

// middleware to check query string token
app.use((req, res, next) => {
    const token = req.query.access_token;
    if (!token) {
        return res.status(401).send("Access token missing");
    }
    console.log("Middleware is running, token:", token);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/random", (req, res) => {
    res.send("Random page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});