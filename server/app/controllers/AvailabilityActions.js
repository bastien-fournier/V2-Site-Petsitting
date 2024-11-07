const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const availability = req.body;
    console.info(availability);

    // Créer un nouvel utilisateur
    const insertUserId = await tables.availability.create(
      availability,
      req.user
    );
    // const insertCandiateId = await tables.candidate.create(user, insertUserId);

    res.status(201).json(insertUserId); // Répondre avec l'utilisateur créé
  } catch (err) {
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const availabilities = await tables.availability.readAll();

    // Respond with the offers in JSON format
    res.json(availabilities);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  add,
  browse,
};
