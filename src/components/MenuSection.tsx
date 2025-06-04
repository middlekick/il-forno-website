import { Pizza, Coffee, Beef, Salad, Drumstick, Sandwich, UtensilsCrossed, Wine, IceCream } from 'lucide-react';

const MenuSection = () => {
  const pizzeriaMenu = {
    pizzas: {
      baseSauceTomate: [
        { name: "Margherita", description: "Sauce tomate, mozzarella, origan", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "4 Fromages", description: "Sauce tomate, mozzarella, brie, chèvre, bleu", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "4 Jambons", description: "Sauce tomate, mozzarella, jambon, lardons, chorizo, pepperoni", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "4 Saisons", description: "Sauce tomate, mozzarella, jambon, champignons, artichauts, ollives, poivrons", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Thon", description: "Sauce tomate, mozzarella, thon, poivrons, tomates fraîches, olives", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Américaine", description: "Sauce tomate, mozzarella, bacon, viande hachée, oignons, crème fraîche, œuf", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Bella Vida", description: "Sauce tomate, mozzarella, poulet, viande hachée, olives", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Campagnarde", description: "Sauce tomate, mozzarella, pommes de terre, viande hachée, oignons", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Campione", description: "Sauce tomate, mozzarella, viande hachée, champignons, oignons", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "La Fertoise", description: "Sauce tomate, mozzarella, jambon sec, parmesan, tomates confites, roquette", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Fajitas", description: "Sauce tomate, mozzarella, poulet, oignons, poivrons", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Hawaïenne", description: "Sauce tomate, mozzarella, jambon, ananas", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Napolitaine", description: "Sauce tomate, mozzarella, anchois, câpres, olives", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Orientale", description: "Sauce tomate, mozzarella, merguez, poivrons, œuf", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Pacifico", description: "Sauce tomate, mozzarella, saumon fumé, tranches de citron", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Pepperoni", description: "Sauce tomate, mozzarella, pepperoni", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Paysanne", description: "Sauce tomate, mozzarella, lardons, œuf", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Reine", description: "Sauce tomate, mozzarella, jambon, champignons", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Roquefort", description: "Sauce tomate, mozzarella, jambon, roquefort", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Royale", description: "Sauce tomate, mozzarella, merguez, viande hachée", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "San Pietro", description: "Sauce tomate, mozzarella, jambon, merguez, pepperoni, œuf", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Végétarienne", description: "Sauce tomate, mozzarella, champignons, poivrons, artichauts, tomates fraîches, olives", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Palerme", description: "Sauce tomate, tomates confites, mozzarella fraîche, courgettes, jambon sec", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Calzone Soufflée", description: "Sauce tomate, mozzarella, thon ou viande hachée ou poulet ou jambon, champignons, œuf", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Il Forno", description: "Sauce tomate, courgettes, tomates confites, artichauts, oignons, poivrons, olives", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" }
      ],
      baseSauceBarbecue: [
        { name: "Mexicaine", description: "Sauce barbecue, mozzarella, viande hachée, chorizo, poivrons, œuf", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Hannibal", description: "Sauce barbecue, mozzarella, merguez, poulet, viande hachée", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" }
      ],
      baseCremeFraiche: [
        { name: "La Casa", description: "Crème fraîche, mozzarella, chèvre, jambon sec", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Chèvre Miel", description: "Crème fraîche, mozzarella, chèvre, miel (sortie four)", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Du Chef", description: "Crème fraîche, mozzarella, viande hachée, chèvre", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Fermière", description: "Crème fraîche, mozzarella, lardons, chèvre, oignons", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Indienne", description: "Crème fraîche, mozzarella, poulet, pommes de terre, curry", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Nex Texas", description: "Crème fraîche, mozzarella, pommes de terre, viande hachée, boursin", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Raclette", description: "Crème fraîche, mozzarella, pommes de terre, jambon, raclette", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Rimini", description: "Crème fraîche, mozzarella, pommes de terre, poulet", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Pesto", description: "Crème fraîche, mozzarella, pesto, jambon sec, tomates confites, roquette", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Rustique", description: "Crème fraîche, mozzarella, pommes de terre, jambon, oignons", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Savoyarde", description: "Crème fraîche, mozzarella, pommes de terre, lardons, reblochon, oignons", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Venezia", description: "Crème fraîche, mozzarella, bacon, chèvre, champignons, olives, oignons, œuf", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" },
        { name: "Sardenia", description: "Crème fraîche, mozzarella, roquefort, tranches de mozzarella, parmesan (sortie four)", priceJunior: "10,00€", priceSenior: "14,50€", priceMega: "19,50€" }
      ]
    },
    salades: [
      { name: "Chèvre Chaud", description: "Salade verte, chèvre chaud sur toast, lardons", price: "6,50€" },
      { name: "Chef", description: "Salade verte, tomates confites, jambon sec, mozzarella, vinaigrette", price: "6,50€" },
      { name: "Nicoise", description: "Salade verte, tomate, thon, pommes de terre, olives, vinaigrette", price: "6,50€" },
      { name: "Verte", description: "Salade verte, tomate, vinaigrette", price: "6,50€" },
      { name: "Poulet", description: "Salade verte, tomate, poulet, maïs, vinaigrette", price: "6,50€" },
      { name: "Norvégienne", description: "Salade verte, tomates, saumon fumé, pommes de terre, olives, vinaigrette", price: "6,50€" }
    ],
    paninis: [
      { name: "Poulet", description: "+1 boisson 33 cl au choix OFFERTE", price: "6,00€" },
      { name: "Viande Hachée", description: "+1 boisson 33 cl au choix OFFERTE", price: "6,00€" },
      { name: "Jambon", description: "+1 boisson 33 cl au choix OFFERTE", price: "6,00€" },
      { name: "Thon", description: "+1 boisson 33 cl au choix OFFERTE", price: "6,00€" },
      { name: "4 Fromages", description: "+1 boisson 33 cl au choix OFFERTE", price: "6,00€" },
      { name: "Saumon", description: "+1 boisson 33 cl au choix OFFERTE", price: "6,00€" }
    ],
    texMex: [
      { name: "Nuggets", description: "8 pièces avec frites, boisson 33 cl, sauce au choix", price: "8,50€" }
    ],
    menus: [
      { name: "Menu Junior", description: "3 pizzas junior au choix + 1 maxi boisson 1,5 L", price: "23€" },
      { name: "Menu Senior", description: "2 pizzas senior au choix + 1 maxi boisson 1,5 L", price: "25€" },
      { name: "Menu Méga", description: "2 pizzas méga au choix + 1 maxi boisson 1,5 L", price: "32€" }
    ],
    boxPoulet: [
      { name: "Chicken Wings", description: "6 wings, frites, 1 boisson 33 cl", price: "7€" },
      { name: "Chicken wings", description: "9 wings, frites, 1 boisson 33 cl", price: "9€" },
      { name: "Chicken Tenders", description: "6 tenders, frites, 1 boisson 33 cl", price: "8€" },
      { name: "Chicken Tenders", description: "9 tenders, frites, 1 boisson 33 cl", price: "10,50€" },
      { name: "Bucket", description: "8 wings, 8 tenders, 2 frites, 2 boisson 33 cl", price: "17€" },
      { name: "Maxi Bucket", description: "14 wings, 14 tenders, 4 frites, 1 maxi boisson 1,5l", price: "27€" }
    ],
    supplements: {
      junior: "1,80€",
      senior: "2,00€",
      mega: "2,50€"
    },
    boissons: [
      { name: "Boissons 33 cl", price: "1,50€" },
      { name: "Eau 50 cl", price: "1,50€" },
      { name: "Bière 33 cl", price: "1,50€" },
      { name: "Boissons 1,5 L", price: "2,50€" },
      { name: "Oasis 2 L", price: "3,50€" }
    ],
    desserts: [
      { name: "Tiramisu", price: "3€" },
      { name: "Tarte au daim", price: "3€" },
      { name: "Panini Nutella", price: "4€" },
      { name: "Fondant au chocolat", price: "3€" }
    ],
    vins: [
      { name: "Vin rouge", price: "7€" },
      { name: "Vin blanc", price: "7€" },
      { name: "Vin rosé", price: "7€" }
    ],
    glaces: [
      { name: "Pot de 100ml", price: "3,50€" },
      { name: "Pot de 500ml", price: "7,50€" }
    ],
    pizzaNutella: [
      { name: "Pizza Nutella", priceJunior: "8€", priceSenior: "10€", priceMega: "12€" }
    ]
  };

  const allPizzas = [
    ...pizzeriaMenu.pizzas.baseSauceTomate,
    ...pizzeriaMenu.pizzas.baseSauceBarbecue,
    ...pizzeriaMenu.pizzas.baseCremeFraiche,
    ...pizzeriaMenu.pizzaNutella
  ];

  const PizzaCard = ({ pizza }) => (
    <div className="border-b border-gray-100 pb-4 last:border-b-0">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h4 className="font-inter font-semibold text-gray-800 text-lg">{pizza.name}</h4>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">{pizza.description}</p>
        </div>
        <div className="ml-4 text-right">
          {pizza.priceJunior ? (
            <div className="space-y-1">
              <div className="text-xs text-gray-500">Junior: <span className="font-bold text-red-600">{pizza.priceJunior}</span></div>
              <div className="text-xs text-gray-500">Senior: <span className="font-bold text-red-600">{pizza.priceSenior}</span></div>
              <div className="text-xs text-gray-500">Méga: <span className="font-bold text-red-600">{pizza.priceMega}</span></div>
            </div>
          ) : (
            <span className="font-playfair font-bold text-red-600 text-lg">{pizza.price}</span>
          )}
        </div>
      </div>
    </div>
  );

  const MenuCard = ({ title, items, icon: Icon, description }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <Icon className="text-red-600 mr-3" size={32} />
        <div>
          <h3 className="text-xl font-playfair font-bold text-red-600">{title}</h3>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-inter font-semibold text-gray-800">{item.name}</h4>
                {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
              </div>
              <span className="font-playfair font-bold text-red-600 ml-4">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-red-600 mb-6">
            Notre Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Découvrez nos spécialités italiennes préparées avec passion
          </p>
        </div>

        {/* Pizzas Section - Plus importante, prend toute la largeur */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <Pizza className="text-red-600 mr-4" size={40} />
              <div>
                <h3 className="text-3xl font-playfair font-bold text-red-600">Nos Pizzas</h3>
                <p className="text-gray-600">Toutes nos pizzas sont disponibles en 3 tailles</p>
              </div>
            </div>
            
            {/* Pizzas par catégorie */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-red-200 pb-2">
                  🍅 Base Sauce Tomate
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {pizzeriaMenu.pizzas.baseSauceTomate.map((pizza, index) => (
                    <PizzaCard key={index} pizza={pizza} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-red-200 pb-2">
                  🔥 Base Sauce Barbecue
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {pizzeriaMenu.pizzas.baseSauceBarbecue.map((pizza, index) => (
                    <PizzaCard key={index} pizza={pizza} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-red-200 pb-2">
                  🧄 Base Crème Fraîche
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {pizzeriaMenu.pizzas.baseCremeFraiche.map((pizza, index) => (
                    <PizzaCard key={index} pizza={pizza} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-red-200 pb-2">
                  🍫 Pizza Sucrée
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {pizzeriaMenu.pizzaNutella.map((pizza, index) => (
                    <PizzaCard key={index} pizza={pizza} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 font-medium">
                📏 Suppléments par taille : Junior +{pizzeriaMenu.supplements.junior} | Senior +{pizzeriaMenu.supplements.senior} | Méga +{pizzeriaMenu.supplements.mega}
              </p>
            </div>
          </div>
        </div>

        {/* Autres sections en grille */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          <MenuCard 
            title="Salades" 
            items={pizzeriaMenu.salades} 
            icon={Salad}
            description="Fraîches et généreuses"
          />
          
          <MenuCard 
            title="Paninis" 
            items={pizzeriaMenu.paninis} 
            icon={Sandwich}
            description="Avec boisson offerte"
          />
          
          <MenuCard 
            title="Box Poulet" 
            items={pizzeriaMenu.boxPoulet} 
            icon={Drumstick}
            description="Wings & Tenders"
          />
          
          <MenuCard 
            title="Menus" 
            items={pizzeriaMenu.menus} 
            icon={UtensilsCrossed}
            description="Formules avantageuses"
          />
          
          <MenuCard 
            title="Tex-Mex" 
            items={pizzeriaMenu.texMex} 
            icon={Beef}
            description="Saveurs mexicaines"
          />
          
          <MenuCard 
            title="Boissons" 
            items={pizzeriaMenu.boissons} 
            icon={Coffee}
            description="Rafraîchissements"
          />
        </div>

        {/* Section desserts et extras */}
        <div className="grid lg:grid-cols-3 gap-8">
          <MenuCard 
            title="Desserts" 
            items={pizzeriaMenu.desserts} 
            icon={IceCream}
            description="Douceurs italiennes"
          />
                 
          <MenuCard 
            title="Glaces" 
            items={pizzeriaMenu.glaces} 
            icon={IceCream}
            description="Artisanales"
          />

          <MenuCard 
            title="Vins" 
            items={pizzeriaMenu.vins} 
            icon={Wine}
            description="Sélection de vins"
          />

        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-inter italic text-lg">
            Tous nos plats sont préparés avec des ingrédients frais et de qualité
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;