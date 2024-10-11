import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/product.model.js';
import productRoutes from './routes/product.route.js';
const app = express();
dotenv.config();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/api/products', productRoutes);

// connect to db and start server
const mongoUrl = process.env.MONGO_URL;
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('connected to db');
    app.listen(3000, () => {
      console.log('Listening on port 3000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
