import { useEffect, useState } from 'react';
import api from '../../services/api';

interface PropsData{
  displayName: string;
  displayIcon: string;
  skins: [{
    displayName: string,
    displayIcon: string,
    
    chromas: [{
      displayName: string,
      displayIcon: string,
    }],
    
    levels: [{
      levelItem: string | null,
      streamedVideo: string
    }]
  }];

}

export function useWeapons() {
  const [results, setResults] = useState<PropsData[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/weapons');
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
