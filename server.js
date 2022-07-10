const express = require("express");
const routes = require("./router");
const cors = require("cors");
const server = express();
const port = process.env.PORT || 5500;

server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(express.json());
server.use("/", routes());
server.listen(process.env.PORT || 5500, () => {
  console.log(`Example app listening on port ${port}`);
});
