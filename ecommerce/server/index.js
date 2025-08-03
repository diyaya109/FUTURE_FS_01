import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// API routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// MongoDB connection and server start
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    // Start server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);
  });
