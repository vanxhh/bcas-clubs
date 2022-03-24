const express = require("express");

const Club = require("../models/clubs.js");
const Event = require("../models/events.js");
const Photo = require("../models/photos.js");

const router = express.Router();

const getClubs = async (req, res) => {
  try {
    const foundClubs = await Club.find();
    res.status(200).json({ data: foundClubs });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const foundEvents = await Event.find();
    res.status(200).json({ data: foundEvents });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getPhotos = async (req, res) => {
  try {
    const foundPhotos = await Photo.find();
    res.status(200).json({ data: foundPhotos });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  router: router,
  getClubs: getClubs,
  getEvents: getEvents,
  getPhotos: getPhotos,
};
