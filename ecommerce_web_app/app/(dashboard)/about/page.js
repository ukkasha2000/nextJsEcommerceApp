'use client'
import React from 'react';
import { Descriptions } from '@/atoms';

const About = () => {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', minHeight: '95vh', padding: '10px' }}>
      <h1
        title="About Us"
        style={{ borderBottom: '1px solid #fff', padding: '20px 0', color: 'red' }}
      />
      <div style={{ padding: '20px' }}>
        <img
          src="/assets/images/aboutUs.jpeg"
          alt="About Us Image"
          style={{ width: '90%', maxHeight: '600px', borderRadius: '8px', marginLeft: '5%' }}
        />
      </div>
      <Descriptions style={{ marginTop: '20px'}} bordered>
          <Descriptions.Item label="Welcome" style={{ color: 'white', fontSize: '20px', borderColor: 'white', borderLeft: '1px solid white' }}>
            Welcome to our e-commerce website specializing in iPhones and accessories. We are
            dedicated to providing high-quality products and an excellent shopping experience
            for our customers.
          </Descriptions.Item>
          <Descriptions.Item label="Mission" style={{ color: 'white', fontSize: '20px', borderColor: 'white' }}>
            Our mission is to offer the latest and most innovative iPhones, along with a wide
            range of accessories to enhance your device. Whether you're looking for protective
            cases, stylish covers, or cutting-edge gadgets, we have you covered.
          </Descriptions.Item>
          <Descriptions.Item label="Contact" style={{ color: 'white', fontSize: '20px', borderColor: 'white' }}>
            If you have any questions or feedback, feel free to contact us. Thank you for
            choosing us as your go-to destination for all things iPhone!
          </Descriptions.Item>
        </Descriptions>
    </div>
  );
};

export default About;
