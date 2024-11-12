const AbstractRepository = require("./AbstractRepository");

class AvailabilityRepository extends AbstractRepository {
  constructor() {
    super({ table: "availability" });
  }

  async create(availability, userId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (start_date, end_date, status, user_id) VALUES (?, ?, ?, ?)`,
      [
        availability.startDate,
        availability.endDate,
        availability.status,
        userId,
      ]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(id, availability) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET start_date = ?, end_date = ?, status = ? WHERE id = ?`,
      [availability.startDate, availability.endDate, availability.status, id]
    );
    return result.affectedRows > 0; // Renvoie true si la modification a été effectuée
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows > 0; // Renvoie true si la suppression a été effectuée
  }
}

module.exports = AvailabilityRepository;
