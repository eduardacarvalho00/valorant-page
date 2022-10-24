import { useEffect, useState } from 'react';
import api from '../../services/api';

interface PropsData{
  displayName: string;
  displayIcon: string;
}

export function useBundles() {
  const [results, setResults] = useState<PropsData[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/bundles');
        setResults(data.data);
      } catch (error) {
        console.log('Error trying to search for this category!');
      }
    })();
  }, []);
  return {
    results,
  };
}
