import React from 'react';

interface PrivacyModalProps {
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-italian-red text-xl">&times;</button>
        <h2 className="text-xl font-bold mb-4 text-red-600">Protection des données</h2>
        <div className="text-gray-700 text-sm space-y-2">
          <p>Chez Il Forno, nous accordons une grande importance à la protection de votre vie privée et de vos données personnelles.</p>
          <p><strong>Aucune donnée personnelle n'est collectée ou sauvegardée lors de votre navigation sur ce site.</strong></p>
          <p>Nous n'utilisons aucun cookie de suivi, de mesure d'audience ou à des fins publicitaires. Seuls les cookies strictement nécessaires au fonctionnement technique du site peuvent être utilisés, mais ils ne permettent en aucun cas de vous identifier ou de tracer votre navigation.</p>
          <p>Vous ne serez jamais sollicité pour fournir des informations personnelles, et aucune information n'est transmise à des tiers.</p>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Toutefois, ce site ne stockant aucune donnée, il n'y a aucune information à modifier ou supprimer.</p>
          <p>Pour toute question concernant la protection de vos données, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:samuel.poussin974@gmail.com" className="underline hover:text-italian-red">samuel.poussin974@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal; 