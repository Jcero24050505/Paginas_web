interface PricingOption {
  title: string;
  price: string;
  description?: string;
  features?: string[];
  highlighted?: boolean;
}

interface PricingTableProps {
  title: string;
  subtitle?: string;
  options: PricingOption[];
}

const PricingTable: React.FC<PricingTableProps> = ({ 
  title, 
  subtitle, 
  options 
}) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-md ${
                option.highlighted 
                  ? 'border-2 border-blue-500 relative transform md:-translate-y-2' 
                  : 'border border-gray-200'
              }`}
            >
              {option.highlighted && (
                <div className="bg-blue-500 text-white text-center py-1 text-sm font-bold">
                  Recomendado
                </div>
              )}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{option.title}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-900">{option.price}</span>
                </div>
                {option.description && (
                  <p className="text-gray-600 mb-6">{option.description}</p>
                )}
                {option.features && option.features.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <button 
                  className={`w-full py-2 px-4 rounded transition-colors ${
                    option.highlighted 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  Reservar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;