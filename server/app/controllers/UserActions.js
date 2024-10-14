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

module.exports = {
  add,
};
