import { useEffect, useState } from 'react';
import api from '../../services/api';

interface PropsData{
  splash: string;
  displayIcon?: string;
  displayName: string;
  listViewIcon: string;
}

export function useMaps() {
  const [results, setResults] = useState<PropsData[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/maps');
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
