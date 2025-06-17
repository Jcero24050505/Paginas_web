import React, { useState } from 'react';
import { Coffee, Utensils, Wine } from 'lucide-react';

type MenuCategory = 'compartir' | 'principales' | 'bebidas';

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

const CafeMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('compartir');

  const menuData: Record<MenuCategory, MenuItem[]> = {
    compartir: [
      { name: 'Nachos con Guacamole', price: 6.50, description: 'Tortillas de maíz con guacamole casero' },
      { name: 'Patatas Bravas Yurok', price: 5.50, description: 'Con nuestra salsa picante especial' },
      { name: 'Tabla de Quesos', price: 9.00, description: 'Selección de quesos con nueces y mermelada' },
      { name: 'Hummus con Crudités', price: 6.00, description: 'Hummus casero con verduras frescas' },
      { name: 'Mix de Olivas', price: 3.50, description: 'Variedad de aceitunas marinadas' }
    ],
    principales: [
      { name: 'Sandwich Vegetal', price: 6.50, description: 'Con huevo, lechuga, tomate y mayonesa' },
      { name: 'Hamburguesa Yurok', price: 9.50, description: 'Carne 100% vacuno, cheddar, bacon y salsa especial' },
      { name: 'Wrap de Pollo', price: 7.50, description: 'Pollo a la plancha, aguacate y salsa de yogur' },
      { name: 'Bowl Energético', price: 8.00, description: 'Quinoa, aguacate, huevo y vegetales de temporada' },
      { name: 'Pizza Margarita', price: 8.50, description: 'Base fina, tomate y mozzarella' }
    ],
    bebidas: [
      { name: 'Agua Mineral', price: 1.50 },
      { name: 'Refrescos', price: 2.20 },
      { name: 'Cerveza', price: 2.50 },
      { name: 'Zumo Natural', price: 3.50 },
      { name: 'Café Espresso', price: 1.50 },
      { name: 'Café con Leche', price: 1.80 },
      { name: 'Batido Proteínas', price: 4.50, description: 'Proteína, plátano, avena y leche' },
      { name: 'Smoothie Energía', price: 4.00, description: 'Frutas rojas y zumo de naranja' }
    ]
  };

  const getCategoryIcon = (category: MenuCategory) => {
    switch (category) {
      case 'compartir':
        return <Utensils size={20} />;
      case 'principales':
        return <Utensils size={20} />;
      case 'bebidas':
        return <Coffee size={20} />;
    }
  };

  const getCategoryLabel = (category: MenuCategory) => {
    switch (category) {
      case 'compartir':
        return 'Para Compartir';
      case 'principales':
        return 'Platos Principales';
      case 'bebidas':
        return 'Para Beber';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-amber-50 p-6 border-b border-amber-100">
        <h3 className="text-2xl font-bold text-amber-800 flex items-center">
          <Coffee size={24} className="mr-2" />
          Yurok Café
        </h3>
        <p className="text-amber-700 mt-2">
          Disfruta de nuestro servicio de cafetería con opciones saludables y energéticas para reponer fuerzas.
        </p>
      </div>

      <div className="p-4">
        <div className="flex border-b border-gray-200 mb-6">
          {(['compartir', 'principales', 'bebidas'] as const).map((category) => (
            <button
              key={category}
              className={`flex items-center py-3 px-4 border-b-2 font-medium text-sm transition-colors ${
                activeCategory === category
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {getCategoryIcon(category)}
              <span className="ml-2">{getCategoryLabel(category)}</span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="flex justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded">
              <div>
                <h4 className="font-medium text-gray-800">{item.name}</h4>
                {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
              </div>
              <div className="font-bold text-gray-900">{item.price.toFixed(2)} €</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CafeMenu;