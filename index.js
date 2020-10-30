const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
uuidv4();
const fileName = `${uuidv4()}.json`;
const { json } = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/feedback', function (req, res) {
    var userInfo = req.body;
    //Save the data in a JSON file
    fs.writeFileSync('./userFeedback/' + fileName, JSON.stringify({ userInfo }));
    res.send({ message: "Thank you for your feedback" });
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})