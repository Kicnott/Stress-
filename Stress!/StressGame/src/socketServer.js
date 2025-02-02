// server.js (Express backend)

import express from 'express';
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express();
const server = createServer(app)
const io = new Server(server)

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}))

// Sample API route
app.get('/api/test', (req, res) => {
  console.log('Received request from Vite frontend');
  res.json({ message: 'Hello from Express Server Side!' });
});

io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Emit an event to the client
  socket.emit('welcome', 'Welcome to the server!');
  
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Example: Listen to a 'message' event from the client
  socket.on('message', (data) => {
    console.log('Received from client:', data);
  });
});

// Start the Express server
app.listen(3000, () => {
  console.log('Express server is running at http://localhost:3000');
});