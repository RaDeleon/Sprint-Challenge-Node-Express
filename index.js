const express = require("express");
const server = express();

const projectDB = require("./data/helpers/projectModel");
const actionDB = require("./data/helpers/actionModel");
const projectRouter = require("./projects/projectRouter");
const actionRouter = require("./actions/actionRouter");

const port = 9000;
// const cors = require("cors");
server.use(express.json());

// R00t

server.get("/", (req, res) => {
    res.status(200).send("<h1>Here's the <em>root directory</em></h1>");
});


server.use("/projects", projectRouter);
server.use("/actions", actionRouter);

server.listen(port, () => console.log(`Listening on port ${port}`));