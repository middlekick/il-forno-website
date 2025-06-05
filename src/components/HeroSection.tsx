import { ChefHat, Clock, MapPin } from 'lucide-react';
import backgroundIlForno from "../assets/images/IL-FORNO-background.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // durée de l'animation en ms
      once: true,    // l'animation ne se joue qu'une fois
    });
  }, []);

  return (
    <section id="accueil" className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-end bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${backgroundIlForno})`
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center animate-fade-in" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              <ChefHat size={80} className="text-italian-red drop-shadow-lg" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-6 drop-shadow-2xl">
              Il Forno
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-inter drop-shadow-lg">
              Pizzeria italienne authentique au cœur de la ville
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-italian-red/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <MapPin className="mx-auto mb-4 text-italian-red" size={32} />
                <h3 className="font-playfair font-bold text-lg mb-2">Sur Place & À Emporter</h3>
                <p className="text-gray-700 font-inter">Savourez nos pizzas dans notre restaurant chaleureux ou emportez-les chez vous</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-italian-red/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <Clock className="mx-auto mb-4 text-italian-red" size={32} />
                <h3 className="font-playfair font-bold text-lg mb-2">Horaires</h3>
                <p className="text-gray-700 font-inter">Mardi - Dimanche<br />18h00 - 22h00</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-italian-red/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <ChefHat className="mx-auto mb-4 text-italian-red" size={32} />
                <h3 className="font-playfair font-bold text-lg mb-2">Recettes Authentiques</h3>
                <p className="text-gray-700 font-inter">Pizzas traditionnelles préparées avec des ingrédients frais et de qualité</p>
              </div>
            </div>
            
            <button
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-italian-red to-red-600 text-white px-8 py-4 rounded-lg text-lg font-inter hover:from-red-600 hover:to-italian-red transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Découvrir notre menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
