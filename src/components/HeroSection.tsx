import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const whatsappNumber = '+1234567890'; // Reemplaza esto con el número de WhatsApp real
  const whatsappMessage = encodeURIComponent('Hola, me gustaría hacer una reserva en Cachorros Hotel Canino.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="inicio" className="bg-mint pt-20 pb-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            El lugar perfecto para tu mejor amigo
          </h1>
          <p className="text-xl text-white mb-6">
            En Cachorros, nos aseguramos de que tu mascota disfrute y se sienta como en casa mientras tú te relajas.
          </p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-mint font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="mr-2" />
            Reserva ahora
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Perros felices jugando"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;