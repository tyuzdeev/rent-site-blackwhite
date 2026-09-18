import React, { useEffect } from 'react';
import type { Property } from '../types';

interface Props {
  property: Property;
  onClose: () => void;
}

export const PropertyModal: React.FC<Props> = ({ property, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const formatPrice = (price: number) => 
    new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-h-[90vh] max-w-4xl flex flex-col relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white text-gray-700 rounded-full flex items-center justify-center transition-colors shadow-sm text-lg"
        >
          ✕
        </button>

        <div className="h-64 sm:h-80 relative shrink-0 bg-gray-100">
          <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-start mb-8 gap-4 border-b border-gray-100 pb-6">
            <div>
              <span className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-semibold mb-3">
                {property.type}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-2">
                {property.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">📍 {property.location}</p>
            </div>
            <div className="text-left md:text-right shrink-0 bg-gray-50 p-4 rounded-2xl">
              <div className="text-3xl font-bold text-gray-900">{formatPrice(property.price)}</div>
              <div className="text-gray-500 text-sm mt-1">итоговая цена за сутки</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-2xl text-center">
              <div className="text-2xl mb-1">👥</div>
              <div className="font-semibold text-gray-900">{property.stats.guests}</div>
              <div className="text-sm text-gray-500">гостей</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl text-center">
              <div className="text-2xl mb-1">🛏️</div>
              <div className="font-semibold text-gray-900">{property.stats.bedrooms}</div>
              <div className="text-sm text-gray-500">спален</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl text-center">
              <div className="text-2xl mb-1">📐</div>
              <div className="font-semibold text-gray-900">{property.stats.area}</div>
              <div className="text-sm text-gray-500">квадратов</div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Описание объекта</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* НОВЫЙ БЛОК: Условия заезда и правила */}
          <div className="mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Условия размещения и залог</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200">
                <span className="text-gray-500">Страховой залог:</span>
                <span className="font-bold text-gray-900">{property.rules.deposit} (при заезде)</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200">
                <span className="text-gray-500">С детьми:</span>
                <span className={`font-semibold ${property.rules.children ? 'text-green-600' : 'text-red-600'}`}>
                  {property.rules.children ? '✓ Можно с детьми' : '✕ Без детей'}
                </span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200">
                <span className="text-gray-500">С животными:</span>
                <span className={`font-semibold ${property.rules.pets ? 'text-green-600' : 'text-red-600'}`}>
                  {property.rules.pets ? '✓ Можно с питомцами' : '✕ Без животных'}
                </span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200">
                <span className="text-gray-500">Вечеринки:</span>
                <span className={`font-semibold ${property.rules.parties ? 'text-green-600' : 'text-gray-700'}`}>
                  {property.rules.parties ? '✓ Разрешены' : '✕ Запрещены'}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Включенные удобства</h3>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, idx) => (
                <span key={idx} className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 shadow-sm">
                  ✓ {amenity}
                </span>
              ))}
            </div>
          </div>

          <button 
            onClick={() => alert('Демонстрационная версия. Бронирование недоступно.')}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg shadow-indigo-500/30"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
};
