'use client';

import React from 'react';
import { Table, Brackets, Bold as Golf, Dumbbell, TreePine, Utensils, ShowerHead as Shower, Car } from 'lucide-react';

type FacilityCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FacilityCard({ icon, title, description }: FacilityCardProps) {
  const getIcon = () => {
    switch (icon) {
      case 'padel':
        return <Table size={48} />;
      case 'tennis':
        return <Brackets size={48} />;
      case 'golf':
        return <Golf size={48} />;
      case 'gym':
        return <Dumbbell size={48} />;
      case 'landscape':
        return <TreePine size={48} />;
      case 'restaurant':
        return <Utensils size={48} />;
      case 'shower':
        return <Shower size={48} />;
      case 'parking':
        return <Car size={48} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-amber-400">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}