const express = require("express");
const ObjectID = require('mongoose').ObjectID;

const Club = require("../models/clubs.js");
const Event = require("../models/events.js");
const Photo = require("../models/photos.js");
const Admin = require("../models/admins.js");

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

const getAdmins = async (req, res) => {
  try {
    const foundAdmin = await Admin.find({ adminID: req.query.adminID });
    const found = foundAdmin.length > 0;
    res.status(200).json({ found: found });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const postEvent = async (req, res) => {
  try {
    const event = new Event({ ...req.query.formData, _id: new ObjectID() });
    event.save(function (err, event) {
      if (err) {
        console.log(err);
      }
    })
    res.status(200);
  } catch (error) {
    res.status(404);
  }
}

module.exports = {
  router: router,
  getClubs: getClubs,
  getEvents: getEvents,
  getPhotos: getPhotos,
  getAdmins: getAdmins,
  postEvent: postEvent,
};
