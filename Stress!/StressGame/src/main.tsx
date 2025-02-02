// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 import path
import App from './App'; // Import the App component
import SocketClient from './socketClient'

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const socket = ReactDOM.createRoot(document.getElementById('socket') as HTMLElement);

root.render(<App />);
socket.render(<SocketClient />);