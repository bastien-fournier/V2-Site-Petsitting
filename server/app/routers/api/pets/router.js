const express = require("express");

const router = express.Router();

const { add, browse } = require("../../../controllers/PetActions");
const { userIdCookie } = require("../../../services/auth");

router.post("/petRegisters", userIdCookie, add);
router.get("/profile/pets", userIdCookie, browse);
// router.delete("/delete-user", verifyCookie, destroyUser);
/* ************************************************************************* */

module.exports = router;
