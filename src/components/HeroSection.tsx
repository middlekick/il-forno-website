
import { ChefHat, Clock, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="min-h-screen bg-gradient-to-br from-italian-cream via-white to-italian-cream flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <ChefHat size={80} className="text-italian-red" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-italian-red mb-6">
            Il Forno
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
            Pizzeria italienne authentique au cœur de la ville
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-italian-red/10 hover:shadow-xl transition-shadow">
              <MapPin className="mx-auto mb-4 text-italian-green" size={32} />
              <h3 className="font-playfair font-bold text-lg mb-2">Sur Place & À Emporter</h3>
              <p className="text-gray-600 font-inter">Savourez nos pizzas dans notre restaurant chaleureux ou emportez-les chez vous</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-italian-red/10 hover:shadow-xl transition-shadow">
              <Clock className="mx-auto mb-4 text-italian-green" size={32} />
              <h3 className="font-playfair font-bold text-lg mb-2">Horaires</h3>
              <p className="text-gray-600 font-inter">Mardi - Dimanche<br />18h00 - 22h00</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-italian-red/10 hover:shadow-xl transition-shadow">
              <ChefHat className="mx-auto mb-4 text-italian-green" size={32} />
              <h3 className="font-playfair font-bold text-lg mb-2">Recettes Authentiques</h3>
              <p className="text-gray-600 font-inter">Pizzas traditionnelles préparées avec des ingrédients frais et de qualité</p>
            </div>
          </div>
          
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-italian-red text-white px-8 py-4 rounded-lg text-lg font-inter hover:bg-italian-red/90 transition-colors shadow-lg"
          >
            Découvrir notre menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
