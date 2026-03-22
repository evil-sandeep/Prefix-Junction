const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const bookingRoutes = require('./routes/bookingRoutes');
const statRoutes = require('./routes/statRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', bookingRoutes);
app.use('/api/stats', statRoutes);
app.use('/api/payment', paymentRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to Petflix Junction API", status: "Running" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
