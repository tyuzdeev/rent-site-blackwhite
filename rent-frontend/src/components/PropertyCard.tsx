import React from 'react';
import type { Property } from '../types';

interface Props {
  property: Property;
  onClick: () => void;
}

export const PropertyCard: React.FC<Props> = ({ property, onClick }) => {
  const formatPrice = (price: number) => 
    new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 text-xs font-semibold rounded-lg shadow-sm">
            {property.type}
          </span>
          {property.isPopular && (
            <span className="bg-indigo-500 text-white px-3 py-1.5 text-xs font-semibold rounded-lg shadow-sm">
              Хит продаж
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-bold text-lg text-gray-900 leading-snug line-clamp-2">{property.title}</h3>
          <div className="flex items-center gap-1 text-sm font-semibold text-gray-700 bg-gray-50 px-2 py-1 rounded-md shrink-0">
            <span className="text-yellow-400">★</span> {property.rating}
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
          📍 {property.location}
        </p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
          <span className="flex items-center gap-1.5">👥 {property.stats.guests} гостей</span>
          <span className="flex items-center gap-1.5">🛏️ {property.stats.bedrooms} спален</span>
        </div>

        <div className="border-t border-gray-100 pt-4 flex items-center justify-between mt-auto">
          <div>
            <span className="text-2xl font-bold text-gray-900">{formatPrice(property.price)}</span>
            <span className="text-gray-500 text-sm ml-1">/ сутки</span>
          </div>
          <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};
