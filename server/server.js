const express = require('express');
const webSocket = require('socket.io');
const path = require('path');
const http = require('http');

const {generateMessage} = require('./utils/message')
const publicPath = path.join(__dirname, '../Public');
let app = express();
let server = http.createServer(app);
let io = webSocket(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat App'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user Joined'));
   
   socket.on('createMessage', (message, acknowledge) => {
    io.emit('newMessage', generateMessage(message.from, message.text));
    acknowledge('Message from Server');
    // socket.broadcast.emit('newMessage', {
    //     from: newMessage.from,
    //     text: newMessage.text,
    //     createdAt: new Date().getTime()
    // })
   });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


server.listen(3000, () => {
    console.log('App is running on port 3000');
})