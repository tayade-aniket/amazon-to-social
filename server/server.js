// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const apiRoutes = require('./routes/api');
const getRoute = require('./routes/getapi');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Updated to match the frontend origin
}));
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://t_aniket:12345@cluster0.qafkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.error("MongoDB connection error:", error));

// Routes
app.use('/api', apiRoutes);
app.use('/api', getRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
