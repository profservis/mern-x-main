// views/pages/Services.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services', error);
      }
    };
    fetchServices();
  }, []);

  const handleOrder = async (serviceId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/orders', { serviceId }, { headers: { Authorization: token } });
      alert('Order created');
    } catch (error) {
      console.error('Error creating order', error);
    }
  };

  return (
    <div>
      {services.map((service) => (
        <div key={service._id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <p>{service.price}</p>
          <button onClick={() => handleOrder(service._id)}>Order</button>
        </div>
      ))}
    </div>
  );
};

export default Services;
