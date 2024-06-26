//04 июня 2024

//models\Order.js
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'in-progress', 'completed', 'rejected'], default: 'pending' },
  // Other fields for tracking progress and changes. Другие поля для отслеживания прогресса и изменений
});

export default mongoose.model('Order', OrderSchema);



