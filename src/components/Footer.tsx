import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Cachorros</h3>
            <p className="text-gray-400">El mejor cuidado para tu mejor amigo</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Por qué elegirnos', 'Galería', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(' ', '-')}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-mint transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400">Calle Principal 123, Ciudad, País</p>
            <p className="text-gray-400">+1 234 567 890</p>
            <p className="text-gray-400">info@cachorros.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2024 Cachorros Hotel Canino. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;