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

const browse = async (req, res) => {
  try {
    const userId = req.user; // Récupère l'ID de l'utilisateur connecté
    const pets = await tables.pet.readByUserId(userId); // Récupère les animaux

    if (pets.length === 0) {
      return res
        .status(404)
        .json({ error: "Aucun animal trouvé pour cet utilisateur." });
    }

    // Renvoie la liste des animaux
    return res.json(pets); // Ici, on renvoie les animaux
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Erreur lors de la récupération des animaux" });
  }
};

module.exports = {
  add,
  browse,
};
