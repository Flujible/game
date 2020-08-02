const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.Server(app);

app.set('port', 5000);
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(5000, () => {
    console.log("Server listening on port 5000")
});
