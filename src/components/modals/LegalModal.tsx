import React from 'react';

interface LegalModalProps {
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-italian-red text-xl">&times;</button>
        <h2 className="text-xl font-bold mb-4">Mentions légales</h2>
        <div className="text-gray-700 text-sm space-y-2">
          <p>Nom de l'entreprise : Il Forno</p>
          <p>Adresse : 5 Rue du Docteur Amodru, 91590 La Ferté Alais</p>
          <p>Responsable de la publication : [Nom du responsable]</p>
          <p>Hébergeur : [Nom et coordonnées de l'hébergeur]</p>
          <p>Pour toute question, veuillez nous contacter.</p>
        </div>
      </div>
    </div>
  );
};

export default LegalModal; 