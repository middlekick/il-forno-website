import React from 'react';

interface PrivacyModalProps {
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-italian-red text-xl">&times;</button>
        <h2 className="text-xl font-bold mb-4">Protection des données</h2>
        <div className="text-gray-700 text-sm space-y-2">
          <p>Nous respectons la confidentialité de vos données personnelles.</p>
          <p>Aucune donnée personnelle n'est collectée sans votre consentement.</p>
          <p>Pour toute demande concernant vos données, contactez-nous.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal; 