const db = require("../db/students.json");

const listController = (request, response) => {
  response.json({ status: 200, data: db });
};
module.exports = listController;
