const express = require("express");
const DevControllers = require("./Controllers/DevControllers");
const LikeController = require("./Controllers/LikeController");
const DislikeController = require("./Controllers/DislikeController");

const routes = express.Router();

routes.get("/devs", DevControllers.index);
routes.post("/devs", DevControllers.store);

routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

module.exports = routes;
