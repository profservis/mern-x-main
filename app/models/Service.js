//04 июня 2024

import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // Duration in days
  // Other fields as needed
});

export default mongoose.model('Service', ServiceSchema);


