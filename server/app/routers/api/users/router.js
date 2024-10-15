const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { add, browse } = require("../../../controllers/UserActions");
const { login, logout } = require("../../../controllers/AuthActions");
const { hashPassword } = require("../../../services/auth");

router.get("/", browse);
router.post("/login", login);
router.get("/logout", logout);
router.post("/registers", hashPassword, add);
// router.delete("/delete-user", verifyCookie, destroyUser);
/* ************************************************************************* */

module.exports = router;
