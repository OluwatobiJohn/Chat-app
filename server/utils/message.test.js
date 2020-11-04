var expect = require('expect');

var {generateMessage} = require('./message');

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