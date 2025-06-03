
import { MapPin, Phone, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-italian-red to-italian-green text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">Contact</h3>
            <div className="space-y-4 font-inter">
              <div className="flex items-center">
                <MapPin className="mr-3" size={20} />
                <div>
                  <p>123 Rue de la Pizza</p>
                  <p>75001 Paris</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3" size={20} />
                <p>01 23 45 67 89</p>
              </div>
              <div className="flex items-center">
                <Clock className="mr-3" size={20} />
                <p>Mar-Dim: 18h-22h</p>
              </div>
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
            © 2024 Il Forno. Tous droits réservés. | Fait avec passion pour la cuisine italienne
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
