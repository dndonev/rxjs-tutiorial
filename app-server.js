const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'static')))

let index = 0;
const countries = ['Moldova', 'Bulgaria', 'Poland', 'Germany', 'Israel'];

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/countries', function (req, res) {
	if (index == countries.length - 1) {
		index = 0;
	}
	res.status(200).send(countries[index]);
	index++;
})

app.listen(3000, () => {
	console.log('listening on port 3000');
})