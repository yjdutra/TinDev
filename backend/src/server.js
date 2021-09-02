const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");
const server = express();

mongoose.connect(
  "mongodb+srv://user:user@cluster0.okt9u.mongodb.net/Omnistack8?retryWrites=true&w=majority"
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(4444);
