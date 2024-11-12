const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const availability = req.body;
    const insertUserId = await tables.availability.create(
      availability,
      req.user
    );
    res.status(201).json(insertUserId);
  } catch (err) {
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    const availabilities = await tables.availability.readAll();
    res.json(availabilities);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const availability = req.body;
    const updated = await tables.availability.update(id, availability);

    if (updated) {
      res
        .status(200)
        .json({ message: "Disponibilité mise à jour avec succès" });
    } else {
      res.status(404).json({ message: "Disponibilité non trouvée" });
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await tables.availability.delete(id);

    if (deleted) {
      res.status(200).json({ message: "Disponibilité supprimée avec succès" });
    } else {
      res.status(404).json({ message: "Disponibilité non trouvée" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
  browse,
  update,
  destroy,
};
