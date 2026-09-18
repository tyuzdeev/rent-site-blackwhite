import { useState, useEffect } from 'react';
import type { Property } from '../types';

export const useProperties = () => {
  const [data, setData] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Теперь Nginx сам знает, что любой запрос к /api/ нужно отправлять нашему бэкенду
        const response = await fetch('/api/properties');
        if (!response.ok) throw new Error('Ошибка сети');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
};
