import React from 'react';
import { motion } from 'framer-motion';
import { Home, Footprints, Heart } from 'lucide-react';

const services = [
  {
    title: 'Hospedaje Premium',
    description: 'Espacios amplios y cómodos, supervisión las 24 horas.',
    icon: Home,
  },
  {
    title: 'Paseos y Ejercicio',
    description: 'Diversión garantizada con actividades diarias.',
    icon: Footprints,
  },
  {
    title: 'Cuidados especiales',
    description: 'Servicios de salud, aseo y alimentación personalizada.',
    icon: Heart,
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-mint mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-mint text-white font-bold py-2 px-4 rounded-full hover:bg-mint-dark transition-colors"
              >
                Más detalles
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;