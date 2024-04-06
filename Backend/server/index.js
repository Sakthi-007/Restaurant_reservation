const mongoose = require('mongoose');
const express = require('express');
const url = "mongodb://localhost:27017/CCE"
const cors = require('cors')
const app = express()


const tableRouter = require("../routers/tables")
const contactRouter = require("../routers/contact")
const filterRouter = require("../routers/filter")

mongoose.connect(url, { useNewUrlParser: true })

const con = mongoose.connection
con.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

con.on('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json())
app.use(cors())

app.use("/tables", tableRouter)
app.use("/contact",contactRouter)
app.use("/filters",filterRouter)
app.listen(5500, () => {
    console.log("Server started");
})