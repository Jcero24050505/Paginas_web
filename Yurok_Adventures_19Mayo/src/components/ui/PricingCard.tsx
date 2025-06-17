import React from 'react';
import { PricingOption } from '../../types';
import { Check } from 'lucide-react';

interface PricingCardProps {
  option: PricingOption;
  onBuy?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ option, onBuy }) => {
  const { title, price, description, imageUrl, features, type } = option;

  const getTypeColor = (type: 'single' | 'membership' | 'rental') => {
    switch (type) {
      case 'single':
        return 'bg-blue-100 text-blue-800';
      case 'membership':
        return 'bg-purple-100 text-purple-800';
      case 'rental':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeText = (type: 'single' | 'membership' | 'rental') => {
    switch (type) {
      case 'single':
        return 'Entrada';
      case 'membership':
        return 'Membresía';
      case 'rental':
        return 'Alquiler';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(type)}`}>
            {getTypeText(type)}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-extrabold text-gray-900">{price}€</span>
          {type === 'rental' && <span className="ml-1 text-gray-500 text-sm">/día</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={onBuy}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default PricingCard;