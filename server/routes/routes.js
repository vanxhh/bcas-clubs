const express = require('express');
const router = express.Router();

const { getClubs, getEvents, getPhotos, getAdmins, postEvent } = require("../controllers/controllers.js");

router.get("/clubs", getClubs)
router.get("/events", getEvents)
router.get("/photos", getPhotos)
router.get("/admins", getAdmins)
router.post("/eventpost", postEvent)

module.exports = router;
