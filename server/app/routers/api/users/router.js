const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { add } = require("../../../controllers/UserActions");
const { hashPassword } = require("../../../services/auth");

router.post("/registers", hashPassword, add);
// router.delete("/delete-user", verifyCookie, destroyUser);
/* ************************************************************************* */

module.exports = router;
