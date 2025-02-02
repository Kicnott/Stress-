import { useEffect } from 'react';
import { io } from 'socket.io-client';

const SocketClient = () => {
  useEffect(() => {
    // Connect to the backend server
    const socket = io('http://localhost:3000');

    // Listen for a 'connect' event
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    // Listen for a 'disconnect' event
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Listen for the 'welcome' event from the server
    socket.on('welcome', (message) => {
      console.log(message); // Should log 'Welcome to the server!'
    });

    // Send a message to the server after connection is established
    socket.emit('message', { content: 'Hello from client!' });

    // Clean up the connection when the component is unmounted
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Socket.IO Client</h1>
    </div>
  );
};

export default SocketClient;