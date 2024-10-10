import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = '+1234567890'; // Reemplaza esto con el número de WhatsApp real
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre Cachorros Hotel Canino.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contáctanos</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="bg-mint bg-opacity-10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">¿Tienes preguntas?</h3>
              <p className="text-gray-600 mb-6">Estamos aquí para ayudarte. Contáctanos por WhatsApp para una respuesta rápida.</p>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-mint text-white font-bold py-3 px-6 rounded-full hover:bg-mint-dark transition-colors"
              >
                <MessageCircle className="mr-2" />
                Contactar por WhatsApp
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="bg-gray-100 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-mint mr-2" />
                  <p>Calle Principal 123, Ciudad, País</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-mint mr-2" />
                  <p>+1 234 567 890</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-mint mr-2" />
                  <p>info@cachorros.com</p>
                </div>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253640023!2d144.95373631531978!3d-37.817343979751735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1635443081240!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;