const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (lastname, firstname, email, password) values (?, ?, ?, ?)`,
      [user.lastname, user.firstname, user.email, user.password]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }
}

module.exports = UserRepository;
