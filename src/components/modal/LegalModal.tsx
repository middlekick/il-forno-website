import React from 'react';

interface LegalModalProps {
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-italian-red text-xl">&times;</button>
        <h2 className="text-xl font-bold mb-4 text-red-600">Mentions légales</h2>
        <div className="text-gray-700 text-sm space-y-2">
          <p><strong>Nom de l'établissement :</strong> IL FORNO</p>
          <p><strong>Nom et forme juridique de l'entreprise :</strong> IL FORNO</p>
          <p><strong>Prénom :</strong> SAMUEL</p>
          <p><strong>Nom :</strong> POUSSIN</p>
          <p><strong>Adresse :</strong> 5 RUE DU DOCTEUR AMODRU</p>
          <p><strong>Code postal :</strong> 91590</p>
          <p><strong>Ville :</strong> LA FERTE ALAIS</p>
          <p><strong>Pays :</strong> FRANCE</p>
          <p><strong>Numéro de téléphone :</strong> +33621905709</p>
          <p><strong>Adresse e-mail :</strong> samuel.poussin974@gmail.com</p>
          <p><strong>Inscription au registre :</strong> 828918110</p>
          <p><strong>Numéro d'enregistrement :</strong> 828918110</p>
          <p><strong>Numéro fiscal local :</strong> 828918110</p>
          <p><strong>Numéro de TVA :</strong> FR68828918110</p>
          <p><strong>Responsable :</strong> POUSSIN</p>
          <p><strong>Capital Social :</strong> 1500</p>
        </div>
      </div>
    </div>
  );
};

export default LegalModal; 