const dotenv = require('dotenv')
const express = require('express');
const app = express();
const mongoose = require('mongoose')
dotenv.config({ path: './config.env' })

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With , Content-Type , Accept"
    );
    next();
});

require('./DB/db')
app.use('/api', require('./Router/CreateUser'));
app.use('/api', require('./Router/DisplayData'));

const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send("hey kunal... i am workig for u");
})

app.listen(PORT, () => {
    console.log(`server is connected with the require port ${PORT}`);
})