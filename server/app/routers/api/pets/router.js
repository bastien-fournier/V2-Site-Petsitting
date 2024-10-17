const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/PetActions");
const { userIdCookie } = require("../../../services/auth");

router.post("/petRegisters", userIdCookie, add);
// router.delete("/delete-user", verifyCookie, destroyUser);
/* ************************************************************************* */

module.exports = router;
