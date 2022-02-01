const express = require("express");
const router = express.Router();
const {
  fetchEvents,
  createEvents,
  deletEvents,
  updateEvent,
} = require("./controllers");
router.get("/", fetchEvents);
router.post("/", createEvents);
router.delete("/:eventId", deleteEvents);
router.put("/:eventId", updateEvents);

module.exports = router;
