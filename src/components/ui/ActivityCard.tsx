import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from '../../types';
import { Clock, BarChart, Users } from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  linkPath?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, linkPath }) => {
  const { title, description, imageUrl, difficulty, duration, ageGroup } = activity;

  const getDifficultyColor = (diff?: 'easy' | 'medium' | 'hard') => {
    switch (diff) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (diff?: 'easy' | 'medium' | 'hard') => {
    switch (diff) {
      case 'easy':
        return 'Fácil';
      case 'medium':
        return 'Medio';
      case 'hard':
        return 'Difícil';
      default:
        return '';
    }
  };

  const content = (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {difficulty && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
              <BarChart size={14} className="mr-1" />
              {getDifficultyText(difficulty)}
            </span>
          )}
          {duration && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <Clock size={14} className="mr-1" />
              {duration}
            </span>
          )}
          {ageGroup && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              <Users size={14} className="mr-1" />
              {ageGroup}
            </span>
          )}
        </div>
      </div>
      <div className="px-5 pb-5">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Reservar ahora
        </button>
      </div>
    </div>
  );

  if (linkPath) {
    return <Link to={linkPath} className="block h-full">{content}</Link>;
  }

  return content;
};

export default ActivityCard;