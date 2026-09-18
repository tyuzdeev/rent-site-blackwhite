import { useState, useMemo } from 'react';
import { useProperties } from './hooks/useProperties';
import { PropertyCard } from './components/PropertyCard';
import { PropertyModal } from './components/PropertyModal';

const FILTERS = ['Все', 'Квартира', 'Коттедж', 'Дом'];

export default function App() {
  const { data, isLoading, error } = useProperties();
  const [activeFilter, setActiveFilter] = useState('Все');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    if (activeFilter === 'Все') return data;
    return data.filter(item => item.type === activeFilter);
  }, [data, activeFilter]);

  const selectedProperty = useMemo(() => {
    return data.find(p => p.id === selectedPropertyId);
  }, [data, selectedPropertyId]);

  if (selectedPropertyId) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'unset';

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">t</div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">tyuzdeevrent</h1>
          </div>
          <button className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors">
            Личный кабинет
          </button>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-10 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Аренда недвижимости
            </h2>
            <p className="text-gray-500">
              Найдено объектов: <span className="font-semibold text-gray-900">{filteredData.length}</span>
            </p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {FILTERS.map(type => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === type 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {error ? (
          <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 text-center font-medium">
            Ошибка загрузки данных: {error}
          </div>
        ) : isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} className="bg-white rounded-2xl border border-gray-100 h-[400px] animate-pulse flex flex-col p-4">
                <div className="bg-gray-200 w-full h-48 rounded-xl mb-4"></div>
                <div className="bg-gray-200 w-3/4 h-6 rounded-md mb-2"></div>
                <div className="bg-gray-200 w-1/2 h-4 rounded-md mb-auto"></div>
                <div className="bg-gray-200 w-full h-10 rounded-xl mt-4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredData.map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onClick={() => setSelectedPropertyId(property.id)} 
              />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-white py-8 mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} tyuzdeevrent. Проект для портфолио.
          </p>
        </div>
      </footer>

      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedPropertyId(null)} 
        />
      )}
    </div>
  );
}
