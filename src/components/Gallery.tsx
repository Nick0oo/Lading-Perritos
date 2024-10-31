import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
];

const Gallery: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="galerie" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Galerie</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <img
                  src={image}
                  alt={`Cachorros Hotel Canino - Imagen ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;