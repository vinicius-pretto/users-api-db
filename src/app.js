const express = require("express");
const HttpStatus = require("Http-status");
const UsersRepository = require("./users/usersRepository");
const usersRepository = new UsersRepository();
const app = express();

app.use(express.json());

app.post("/api/users", (req, res) => {
  const user = req.body;

  usersRepository.create(user)
    .then(() => {
      res.sendStatus(HttpStatus.CREATED);
    });
});

module.exports = app;
