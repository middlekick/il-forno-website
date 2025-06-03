
import { Clock, Calendar, Phone } from 'lucide-react';

const HorairesSection = () => {
  const horaires = [
    { jour: "Lundi", heures: "Fermé", isClosed: true },
    { jour: "Mardi", heures: "18h00 - 22h00", isClosed: false },
    { jour: "Mercredi", heures: "18h00 - 22h00", isClosed: false },
    { jour: "Jeudi", heures: "18h00 - 22h00", isClosed: false },
    { jour: "Vendredi", heures: "18h00 - 22h00", isClosed: false },
    { jour: "Samedi", heures: "18h00 - 22h00", isClosed: false },
    { jour: "Dimanche", heures: "18h00 - 22h00", isClosed: false }
  ];

  return (
    <section id="horaires" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-italian-red mb-6">
            Horaires d'Ouverture
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Venez nous rendre visite selon nos horaires d'ouverture
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Horaires */}
            <div className="bg-gradient-to-br from-italian-cream to-white p-8 rounded-xl shadow-lg border border-italian-red/10">
              <div className="flex items-center mb-6">
                <Clock className="text-italian-red mr-4" size={40} />
                <h3 className="text-2xl font-playfair font-bold text-italian-red">Planning Hebdomadaire</h3>
              </div>
              
              <div className="space-y-3">
                {horaires.map((horaire, index) => (
                  <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                    horaire.isClosed ? 'bg-gray-100' : 'bg-white'
                  } border border-gray-200`}>
                    <span className={`font-inter font-semibold ${
                      horaire.isClosed ? 'text-gray-500' : 'text-gray-800'
                    }`}>
                      {horaire.jour}
                    </span>
                    <span className={`font-inter ${
                      horaire.isClosed ? 'text-gray-500' : 'text-italian-green font-semibold'
                    }`}>
                      {horaire.heures}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-italian-red to-italian-green p-8 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <Calendar className="mr-4" size={32} />
                  <h3 className="text-xl font-playfair font-bold">Informations Pratiques</h3>
                </div>
                <ul className="space-y-3 font-inter">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Ouvert 6 jours sur 7
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Service continu de 18h à 22h
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Fermeture exceptionnelle le lundi
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Commandes jusqu'à 21h30
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-italian-red/10">
                <div className="flex items-center mb-4">
                  <Phone className="text-italian-red mr-4" size={32} />
                  <h3 className="text-xl font-playfair font-bold text-italian-red">Réservations</h3>
                </div>
                <p className="text-gray-600 font-inter mb-4">
                  Pour éviter l'attente, n'hésitez pas à nous appeler pour réserver votre table ou commander à emporter.
                </p>
                <button className="bg-italian-green text-white px-6 py-3 rounded-lg font-inter hover:bg-italian-green/90 transition-colors">
                  Nous appeler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorairesSection;
