require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const MONGOOSE_URL = `mongodb+srv://${process.env.MONGOOSE_USERNAME}:${process.env.MONGOOSE_PASSWORD}@cluster0.cumy0.mongodb.net/bcasclubs?retryWrites=true&w=majority`;

mongoose.connect(MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
const PORT = 5000;
const router = require("./routes/routes.js");

app.use('/api', router)
	.use(express.static(path.join(__dirname, '../client/build')))
	.use(cors());

app.get('/', (req, res) => {
	res.render(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => console.log('Server started...'));
