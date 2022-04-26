require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const favicon = require('express-favicon');

const MONGOOSE_URL = `mongodb://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASSWORD}@cluster0.cumy0.mongodb.net/bcasclubs?retryWrites=true&w=majority`;

mongoose.connect(MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./routes/routes.js");

app.use('/api', router)
	.use(express.static(path.join(__dirname, '../client/build')))
	.use(cors())
	.use(favicon(path.join(__dirname, '../client/build/favicon.ico')))
	.use(bodyparser.urlencoded({
		extended: true,
		limit: '50mb',
		parameterLimit: 10000
	}))
	.use(bodyparser.json({
		limit: '50mb',
		parameterLimit: 10000
	}));

app.get('/', (req, res) => {
	res.render(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/api/eventpost', (req, res) => {
	db.collection('events').insertOne(req.body.params.formData, (err, data) => {
		if (err) {
			return console.log(err);
		}
		res.send('saved to DB');
	})
});

app.post('/api/reportpost', (req, res) => {
	db.collection('events').updateOne(
		{ "_id": new ObjectID(req.body.params.formData.eventID) },
		{ $set: req.body.params.formData },
		(err, data) => {
			if (err) {
				return console.log(err);
			}
			res.send('saved to DB');
	})
});

app.listen(PORT, () => console.log('Server started...'));
