'use strict';

//Setup socket
const net = require('net');
const client = new net.Socket();
client.connect(3001, 'localhost', () => {});


//Event listeners
client.on('data', (payload) => {
  let [event, message] = payload.toString().split(/\s+(.*)/);

  if(event === 'save'){
    console.log(message.toString());
  } else {
    console.error(message.toString());
  }
});

client.on('close', () => {
  console.log('Connection closed.');
});