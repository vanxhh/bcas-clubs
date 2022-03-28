const express = require('express');
const router = express.Router();

const { getClubs, getEvents, getPhotos, getAdmins } = require("../controllers/controllers.js");

router.get("/clubs", getClubs)
router.get("/events", getEvents)
router.get("/photos", getPhotos)
router.get("/admins", getAdmins)

module.exports = router;
