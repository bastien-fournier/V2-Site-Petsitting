const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const petsRouter = require("./pets/router");

router.use("/pets", petsRouter);

/* ************************************************************************* */

module.exports = router;
