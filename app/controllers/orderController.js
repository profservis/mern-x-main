import Order from '../models/Order.js';
import sendEmail from '../utils/sendEmail.js';

export const createOrder = async (req, res) => {
  try {
    const { serviceId } = req.body;
    const order = new Order({ service: serviceId, customer: req.user.id, status: 'pending' });
    await order.save();
    // Send notification
    sendEmail(req.user.email, 'Order Created', 'Your order has been created.');
    res.status(201).send('Order created');
  } catch (error) {
    res.status(500).send('Error creating order');
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).send('Error updating order');
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('service').populate('customer', 'username');
    res.status(200).json(order);
  } catch (error) {
    res.status(500).send('Error fetching order');
  }
};
