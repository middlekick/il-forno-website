
import { Pizza, Coffee, Beef } from 'lucide-react';

const MenuSection = () => {
  const pizzas = [
    { name: "Margherita", description: "Tomate, mozzarella, basilic frais", price: "12€" },
    { name: "Regina", description: "Tomate, mozzarella, jambon, champignons", price: "14€" },
    { name: "Quattro Stagioni", description: "Tomate, mozzarella, jambon, champignons, artichauts, olives", price: "16€" },
    { name: "Diavola", description: "Tomate, mozzarella, salami piquant", price: "15€" },
    { name: "Capricciosa", description: "Tomate, mozzarella, jambon, champignons, artichauts", price: "15€" },
    { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, parmesan, chèvre", price: "16€" },
    { name: "Napolitaine", description: "Tomate, mozzarella, anchois, olives, câpres", price: "14€" },
    { name: "Calzone", description: "Pizza fermée: tomate, mozzarella, jambon, œuf", price: "15€" }
  ];

  const burgers = [
    { name: "Burger Classic", description: "Steak, salade, tomate, oignon, frites", price: "13€" },
    { name: "Burger Bacon", description: "Steak, bacon, fromage, salade, tomate, frites", price: "15€" },
    { name: "Burger Italien", description: "Steak, mozzarella, tomate, basilic, frites", price: "14€" },
    { name: "Menu Enfant", description: "Mini burger, frites, boisson", price: "8€" }
  ];

  const boissons = [
    { name: "Eau plate/pétillante", price: "2€" },
    { name: "Sodas", price: "3€" },
    { name: "Jus de fruits", price: "3€" },
    { name: "Bière pression", price: "4€" },
    { name: "Vin rouge/blanc", price: "4€" },
    { name: "Café/Thé", price: "2€" }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-italian-red mb-6">
            Notre Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Découvrez nos spécialités italiennes préparées avec passion
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Pizzas */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <Pizza className="text-italian-red mr-4" size={40} />
              <h3 className="text-2xl font-playfair font-bold text-italian-red">Pizzas</h3>
            </div>
            <div className="space-y-4">
              {pizzas.map((pizza, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-gray-800">{pizza.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{pizza.description}</p>
                    </div>
                    <span className="font-playfair font-bold text-italian-red ml-4">{pizza.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Burgers */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <Beef className="text-italian-red mr-4" size={40} />
              <h3 className="text-2xl font-playfair font-bold text-italian-red">Burgers & Menus</h3>
            </div>
            <div className="space-y-4">
              {burgers.map((burger, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-gray-800">{burger.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{burger.description}</p>
                    </div>
                    <span className="font-playfair font-bold text-italian-red ml-4">{burger.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Boissons */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <Coffee className="text-italian-red mr-4" size={40} />
              <h3 className="text-2xl font-playfair font-bold text-italian-red">Boissons</h3>
            </div>
            <div className="space-y-4">
              {boissons.map((boisson, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                  <div className="flex justify-between items-center">
                    <h4 className="font-inter font-semibold text-gray-800">{boisson.name}</h4>
                    <span className="font-playfair font-bold text-italian-red">{boisson.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-inter italic">
            Tous nos plats sont préparés avec des ingrédients frais et de qualité
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
