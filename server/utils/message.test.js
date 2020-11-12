var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
   it('should generate correct message object', () => {
        let from = 'Jen';
        let text = 'some text here';
        let createdAt = new Date().getTime();
        let message = generateMessage(from, text);

    expect(message.createdAt).toBe(createdAt);
    expect(message).toMatchObject({from, text});
   });
});

describe('generateLocationMessage', () => {
   it('should generate correct location message object', () => {
      let from = 'Admin';
      let latitude = 15;
      let longitude = 19;
      let url = `https://google.com/maps?q=${latitude},${longitude}`;
      let createdAt =  new Date().getTime();
      let message = generateLocationMessage(from, latitude, longitude);

      expect(message.createdAt).toBe(createdAt);
      expect(message).toMatchObject({from, url});
   });
});