
   let socket = io();

   socket.on('connect', function () {
    console.log('Connected to server');
   });

   socket.on('disconnect', function () {
       console.log('Disconnected from Server');
   });
    
  socket.on('newMessage', function (newMessage) {
   console.log('New Message', newMessage);
  });

  socket.emit('createMessage', {
     from: 'frank',
     text: 'this is some text'
  }, function (data) {
     console.log(`Sent, (${data})`);
  });