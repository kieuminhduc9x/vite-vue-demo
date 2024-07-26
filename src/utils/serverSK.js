const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');

  setInterval(() => {
    const newData = {
      label: new Date().toLocaleTimeString(),
      value: Math.floor(Math.random() * 100),
    };
    socket.emit('newTransactionData', newData);
  }, 5000);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(4000, () => {
  console.log('Listening on port 4000');
});
