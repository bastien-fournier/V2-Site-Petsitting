const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const user = req.body;
    console.info(user);

    // Créer un nouvel utilisateur
    const insertUserId = await tables.user.create(user);
    // const insertCandiateId = await tables.candidate.create(user, insertUserId);

    res.status(201).json(insertUserId); // Répondre avec l'utilisateur créé
  } catch (err) {
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const users = await tables.user.readAll();

    // Respond with the offers in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  add,
  browse,
};
