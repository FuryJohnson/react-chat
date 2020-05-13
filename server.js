const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const rooms = new Map();

app.get('/rooms', (req, res) => {
    rooms.set()
    res.json(rooms);
});

io.on('connection', socket => {
    console.log('User connected!', socket.id)
});

server.listen(9999, (err) => {
    console.log("Я запустился");
    if (err) {
        throw Error(err);
    }
});