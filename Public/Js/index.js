
   let socket = io();

   socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
       to: 'john@mail.com',
       text: 'i am good bro'
    });
   });

   socket.on('disconnect', function () {
       console.log('Disconnected from Server');
   });
    
  socket.on('newMessage', function (Email) {
   console.log('New Email', Email);
  });