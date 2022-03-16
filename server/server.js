const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (req, res) => {
	res.render(path.resolve(__dirname, '../client/build/index.html'))
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
});

app.listen(PORT, () => {
	console.log("Server started...");
})
