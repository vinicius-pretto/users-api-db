const { Client } = require("pg");
const config = require("../config");

class UsersRepository {
  constructor() {
    this.client = new Client(config.postgres);
    this.client.connect();
  }

  create(user) {
    const query = {
      text:
        "INSERT INTO users (first_name, last_name, email, birth_date) VALUES ($1, $2, $3, $4);",
      values: [user.firstName, user.lastName, user.email, user.birthDate],
    };
    return this.client.query(query);
  }
}

module.exports = UsersRepository;
