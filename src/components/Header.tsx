import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoIlForno from "../assets/images/IL-FORNO-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-italian-red/10" data-aos="fade-down">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src={logoIlForno} alt="Logo Il Forno" className="h-10 w-auto" />
            <h1 className="text-2xl font-playfair font-bold text-italian-red">
              Il Forno
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-italian-red transition-colors font-inter"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-italian-red transition-colors font-inter"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-italian-red transition-colors font-inter"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('horaires')}
              className="text-gray-700 hover:text-italian-red transition-colors font-inter"
            >
              Horaires
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-italian-red transition-colors font-inter"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-italian-red transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-left text-gray-700 hover:text-italian-red transition-colors font-inter"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-italian-red transition-colors font-inter"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left text-gray-700 hover:text-italian-red transition-colors font-inter"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('horaires')}
                className="text-left text-gray-700 hover:text-italian-red transition-colors font-inter"
              >
                Horaires
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-italian-red transition-colors font-inter"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
