import { MapPin, Phone, Clock, Heart } from 'lucide-react';
import { useState } from 'react';
import Modal from './modals/Modal';
import LegalModal from './modal/LegalModal';
import PrivacyModal from './modal/PrivacyModal';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer id="contact" className="bg-gradient-to-r from-slate-800 to-slate-900 text-white" data-aos="fade-up">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">Contact</h3>
            <div className="space-y-4 font-inter">
              <div className="flex items-center">
                <MapPin className="mr-3" size={20} />
                <div>
                  <p>5 Rue du Docteur Amodru</p>
                  <p>91590 La Ferté Alais</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3" size={20} />
                <p>+33 1 69 64 81 50</p>
              </div>
              <div className="flex items-center">
                <Clock className="mr-3" size={20} />
                <p>Mar-Dim: 18h-22h</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=5+Rue+du+Docteur+Amodru,+91590+La+Ferté+Alais"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>

          {/* À propos */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">Il Forno</h3>
            <p className="font-inter leading-relaxed">
              Pizzeria italienne authentique proposant des pizzas traditionnelles 
              préparées avec passion et des ingrédients de qualité. Une expérience 
              culinaire italienne au cœur de la ville.
            </p>
            <button onClick={() => setIsOpen(true)} className="mt-4 bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded flex">
            Nous contacter
          </button>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">Nos Services</h3>
            <ul className="space-y-2 font-inter">
              <li>• Restaurant sur place</li>
              <li>• Vente à emporter</li>
              <li>• Pizzas traditionnelles</li>
              <li>• Menus hamburgers</li>
              <li>• Paiement CB et espèces</li>
              <li>• Chèques vacances acceptés</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="mr-2" size={20} />
            <p className="font-playfair text-lg">Il Forno - Pizzeria Italienne</p>
          </div>
          <p className="font-inter text-white/80">
            © {new Date().getFullYear()} Il Forno. Tous droits réservés. | Fait avec passion pour la cuisine italienne
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <button onClick={() => setIsLegalOpen(true)} className="underline hover:text-italian-red transition-colors bg-transparent border-0 p-0 m-0 cursor-pointer">Mentions légales</button>
            <span>|</span>
            <button onClick={() => setIsPrivacyOpen(true)} className="underline hover:text-italian-red transition-colors bg-transparent border-0 p-0 m-0 cursor-pointer">Protection des données</button>
          </div>
        </div>
      </div>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      {isLegalOpen && <LegalModal onClose={() => setIsLegalOpen(false)} />}
      {isPrivacyOpen && <PrivacyModal onClose={() => setIsPrivacyOpen(false)} />}
    </footer>
  );
};

export default Footer;