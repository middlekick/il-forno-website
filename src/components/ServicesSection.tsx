import { Utensils, Package, CreditCard, Clock } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-italian-red mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Profitez de nos services adaptés à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Sur Place */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-right">
            <div className="flex items-center mb-6">
              <Utensils className="text-italian-red mr-4" size={40} />
              <h3 className="text-2xl font-playfair font-bold text-italian-red">Sur Place</h3>
            </div>
            <p className="text-gray-700 mb-6 font-inter">
              Installez-vous confortablement dans notre restaurant à l'ambiance chaleureuse et italienne. 
              Savourez nos pizzas fraîchement sorties du four dans un cadre authentique.
            </p>
            <ul className="space-y-2 font-inter">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-italian-green rounded-full mr-3"></span>
                Ambiance conviviale
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-italian-green rounded-full mr-3"></span>
                Service à table
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-italian-green rounded-full mr-3"></span>
                Pizzas servies chaudes
              </li>
            </ul>
          </div>

          {/* À Emporter */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-left">
            <div className="flex items-center mb-6">
              <Package className="text-italian-red mr-4" size={40} />
              <h3 className="text-2xl font-playfair font-bold text-italian-red">À Emporter</h3>
            </div>
            <p className="text-gray-700 mb-6 font-inter">
              Commandez vos pizzas préférées et emportez-les pour les déguster chez vous. 
              Idéal pour vos soirées entre amis ou en famille.
            </p>
            <ul className="space-y-2 font-inter">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-italian-green rounded-full mr-3"></span>
                Commande rapide
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-italian-green rounded-full mr-3"></span>
                Emballage soigné
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-italian-green rounded-full mr-3"></span>
                Pizzas maintenues au chaud
              </li>
            </ul>
          </div>
        </div>

        {/* Moyens de paiement */}
        <div className="mt-16 max-w-4xl mx-auto" data-aos="zoom-in">
          <div className="bg-gradient-to-r from-italian-green to-green-400 p-8 rounded-xl text-white shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <CreditCard className="mr-4" size={40} />
              <h3 className="text-2xl font-playfair font-bold">Moyens de Paiement Acceptés</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-inter">
              <div className="bg-red-100/10 backdrop-blur-sm p-4 rounded-lg hover:bg-red-100/20 transition-colors">
                <p className="font-semibold">Espèces</p>
              </div>
              <div className="bg-red-100/10 backdrop-blur-sm p-4 rounded-lg hover:bg-red-100/20 transition-colors">
                <p className="font-semibold">CB sans contact</p>
              </div>
              <div className="bg-red-100/10 backdrop-blur-sm p-4 rounded-lg hover:bg-red-100/20 transition-colors">
                <p className="font-semibold">Visa / Mastercard</p>
              </div>
              <div className="bg-red-100/10 backdrop-blur-sm p-4 rounded-lg hover:bg-red-100/20 transition-colors">
                <p className="font-semibold">Chèques Vacances</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
