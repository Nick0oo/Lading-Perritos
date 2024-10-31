import React from 'react';
import { Link } from 'react-scroll';
import { Dog } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-black shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Dog className="h-8 w-8 text-white mr-2" />
          <span className="text-3xl font-bold text-white">FRIENDS</span> <span>  s </span> <span className='text-sm font-bold text-white'> By Heimsteins Vivas Group</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {['Startseite', 'Dienstleistungen', 'Vorteile', 'Galerie', 'Kontakt'].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase().replace(' ', '-')}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-mint transition-colors cursor-pointer"
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