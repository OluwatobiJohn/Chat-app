const express = require('express');
const webSocket = require('socket.io');
const path = require('path');
const http = require('http');

const publicPath = path.join(__dirname, '../Public');
let app = express();
let server = http.createServer(app);
let io = webSocket(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
})


server.listen(3000, () => {
    console.log('App is running on port 3000');
})