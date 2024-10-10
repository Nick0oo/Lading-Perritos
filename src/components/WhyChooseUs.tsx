import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Heart, Clock } from 'lucide-react';

const reasons = [
  {
    title: 'Cuidado personalizado',
    description: 'Atención individualizada para cada mascota, adaptada a sus necesidades específicas.',
    icon: Heart,
  },
  {
    title: 'Ambiente seguro',
    description: 'Instalaciones diseñadas para garantizar la seguridad y comodidad de tu mascota.',
    icon: Shield,
  },
  {
    title: 'Personal capacitado',
    description: 'Equipo profesional y amante de los perros, con amplia experiencia en cuidado animal.',
    icon: Award,
  },
  {
    title: 'Atención 24/7',
    description: 'Cuidado y supervisión las 24 horas del día, los 7 días de la semana.',
    icon: Clock,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="por-qué-elegirnos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Por qué elegirnos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-mint bg-opacity-10 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <reason.icon className="h-12 w-12 text-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;