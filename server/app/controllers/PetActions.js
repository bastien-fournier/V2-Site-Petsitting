const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const pet = req.body;
    console.info(pet);

    // Créer un nouvel utilisateur
    const insertUserId = await tables.pet.create(pet, req.user);
    // const insertCandiateId = await tables.candidate.create(user, insertUserId);

    res.status(201).json(insertUserId); // Répondre avec l'utilisateur créé
  } catch (err) {
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const pets = await tables.pet.readAll();

    // Respond with the offers in JSON format
    res.json(pets);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  add,
  browse,
};
