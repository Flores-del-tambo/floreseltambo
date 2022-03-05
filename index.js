const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


//import variables to local enviroment 
require('dotenv').config({ path: 'variables.env'})




const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_TODOS, connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);
//read localhost to variables and port
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 27018;
app.listen(port, host, () => {
    console.log("The server is listening on port " + port);
});

