const express = require('express');
const router = express.Router();

const { getClubs, getEvents, getPhotos } = require("../controllers/controllers.js");

router.get("/clubs", getClubs)
router.get("/events", getEvents)
router.get("/photos", getPhotos)

module.exports = router;
