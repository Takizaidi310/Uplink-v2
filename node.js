const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);

// Initialize Socket.io with CORS enabled so your Vercel frontend can connect
const io = new Server(server, {
    cors: {
        origin: "*", // In production, replace "*" with your Vercel URL for security
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`[UPLINK] NEW SIGNAL: ${socket.id}`);

    // Handle User Joining a Channel (Frequency)
    socket.on('join_channel', (data) => {
        const { username, channel } = data;
        socket.join(channel);
        
        // Broadcast to others in the room
        socket.to(channel).emit('receive_message', {
            sender: 'SYSTEM',
            text: `[${username}] HAS BREACHED THE FREQUENCY.`,
            ts: Date.now()
        });
    });

    // Handle Messages
    socket.on('send_message', (data) => {
        // Broadcast to everyone in the channel INCLUDING sender (simplifies frontend logic)
        io.in(data.channel).emit('receive_message', data);
    });

    socket.on('disconnect', () => {
        console.log(`[UPLINK] SIGNAL LOST: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`SERVER OPERATIONAL ON PORT ${PORT}`);
});
