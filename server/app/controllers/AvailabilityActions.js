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

module.exports = {
  add,
};
