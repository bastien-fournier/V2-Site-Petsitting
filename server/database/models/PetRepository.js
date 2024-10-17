const AbstractRepository = require("./AbstractRepository");

class PetRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "pet" });
  }

  // The C of CRUD - Create operation

  async create(pet, userId) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (petName, user_id) values (?, ?)`,
      [pet.petName, userId]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }
}

module.exports = PetRepository;