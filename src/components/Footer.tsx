import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Friends</h3>
            <p className="text-gray-400">Die beste Pflege für Ihren besten Freund</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quicklinks</h4>
            <ul className="space-y-2">
              {['Startseite', 'Dienstleistungen', 'Vorteile', 'Galerie', 'Kontakt'].map((item) => (
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
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <p className="text-gray-400">Schaffhausen, 8200 fullachstrasse 34, Switzerland</p>
            <p className="text-gray-400">+41 79 839 3541</p>
            <p className="text-gray-400">friendspetshotel@gmail.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">folgen Sie uns</h4>
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
          <p className="text-gray-400">&copy; 2024 Friends by Heimsteins Vivas Group. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;