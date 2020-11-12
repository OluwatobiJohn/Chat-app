
   let socket = io();

   socket.on('connect', function () {
    console.log('Connected to server');
   });

   socket.on('disconnect', function () {
       console.log('Disconnected from Server');
   });

   


   const text = document.getElementById('input');
   let list = document.getElementById('messages');




   socket.on('newLocationMessage', function (message) {
      console.log('Location Message', message);
      let li = jQuery('<li></li>');
      let a = jQuery('<a target="_blank">My Current Location</a>');
      
      li.text(`${message.from}: `);
      a.attr('href', message.url);
      li.append(a);
      jQuery('#messages').append(li);
   });

  socket.on('newMessage', function (message) {
   console.log('New Message', message);
   let li = document.createElement('li');
   li.appendChild(document.createTextNode(`${message.from}: ${message.text}`));
   list.appendChild(li);

  });

//Send Button Function
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

  //Send location Button Function
  const locButton = document.getElementById('send-location');
  locButton.addEventListener('click', sendLoc);

  function sendLoc() {
   if (!navigator.geolocation) {
      return alert('Geolocation is not supported on your browser')
   }

   navigator.geolocation.getCurrentPosition(function (position) {
      socket.emit('sendLocMsg', {
         latitude: position.coords.latitude,
         longitude: position.coords.longitude
      })
   }, function () {
      alert('Cant get current location')
   });
  };