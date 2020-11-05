
   let socket = io();

   socket.on('connect', function () {
    console.log('Connected to server');
   });

   socket.on('disconnect', function () {
       console.log('Disconnected from Server');
   });

    const text = document.getElementById('input');
     let list = document.getElementById('messages');

     
  socket.on('newMessage', function (message) {
   console.log('New Message', message);
   let li = document.createElement('li');
   li.appendChild(document.createTextNode(`${message.from}: ${message.text}`));
   list.appendChild(li);

  });


  const input = document.getElementById('message-form');
  input.addEventListener('submit', inputFunc);


  function inputFunc(e) {
  e.preventDefault();

  socket.emit('createMessage', {
     from: 'User',
     text: text.value
  }, function () {

  })
  };
