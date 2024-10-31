import React from 'react';
import { motion } from 'framer-motion';
import { Home, Footprints, Heart } from 'lucide-react';

const services = [
  {
    title: 'Premium-Unterkunft',
    description: 'Geräumige und komfortable Räume, 24-Stunden-Überwachung.',
    icon: Home,
},
{
    title: 'Spaziergänge und Bewegung',
    description: 'Garantierter Spaß mit täglichen Aktivitäten.',
    icon: Footprints,
},
{
    title: 'Spezielle Pflege',
    description: 'Gesundheitsdienste, Reinigung und personalisierte Ernährung.',
    icon: Heart,
},
];

const Services: React.FC = () => {
  return (
    <section id="dienstleistungen" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Unsere Dienstleistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#c6e0d8] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-[#039c6f] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-black mb-4">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#039c6f] text-white font-bold py-2 px-4 rounded-full hover:bg-[#6bc4aa] hover:text-black transition-colors"
              >
                Mehr Details
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;