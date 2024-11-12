const express = require("express");

const router = express.Router();

const {
  add,
  browse,
  update,
  destroy,
} = require("../../../controllers/AvailabilityActions");
const { userIdCookie } = require("../../../services/auth");

router.post("/availabilityAdmin", userIdCookie, add);
router.get("/readAvailability", browse);
router.put("/availabilityAdmin/:id", userIdCookie, update);
router.delete("/availabilityAdmin/:id", userIdCookie, destroy);

module.exports = router;
