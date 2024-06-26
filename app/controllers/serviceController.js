//04 июня 2024

/* import Service from '../models/Service.js';

export const createService = async (req, res) => {
  // Service creation logic
};

export const getServices = async (req, res) => {
  // Get list of services
}; */



// controllers/serviceController.js
import Service from '../models/Service.js';

export const createService = async (req, res) => {
  try {
    const { title, description, price, duration } = req.body;
    const service = new Service({ title, description, price, duration, provider: req.user.id });
    await service.save();
    res.status(201).send('Service created');
  } catch (error) {
    res.status(500).send('Error creating service');
  }
};

export const getServices = async (req, res) => {
  try {
    const services = await Service.find().populate('provider', 'username');
    res.status(200).json(services);
  } catch (error) {
    res.status(500).send('Error fetching services');
  }
};
