import React from 'react';
import { Link } from 'react-scroll';
import { Dog } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Dog className="h-8 w-8 text-mint mr-2" />
          <span className="text-2xl font-bold text-gray-800">Cachorros</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {['Inicio', 'Servicios', 'Por qué elegirnos', 'Galería', 'Contacto'].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase().replace(' ', '-')}
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-mint transition-colors cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;