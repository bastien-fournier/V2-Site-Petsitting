const express = require("express");

const router = express.Router();

const { add, browse } = require("../../../controllers/AvailabilityActions");
const { userIdCookie } = require("../../../services/auth");

router.post("/availabilityAdmin", userIdCookie, add);
router.get("/readAvailability", browse);

// router.delete("/delete-user", verifyCookie, destroyUser);
/* ************************************************************************* */

module.exports = router;
