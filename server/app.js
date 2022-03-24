const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// const MONGOOSE_URL = 'mongodb+srv://sourabh:zD350B9mie3yNM9X@cluster0.k6pjr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const MONGOOSE_URL = 'mongodb+srv://bcasclubs:bcasclubs7@cluster0.cumy0.mongodb.net/bcasclubs?retryWrites=true&w=majority';

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
