 //04 июня 2024

 //models\User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'provider'], required: true },
  // Other fields as needed
});

export default mongoose.model('User', UserSchema);
