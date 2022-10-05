/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import api from '../../services/api';

interface PropsData{
  displayName: string;
  description: string;
  background: string;
  role:{
    description: string;
    displayIcon: string;
  }
  fullPortrait: string;
  backgroundGradientColors: string[];
  abilities:[{
    displayName: string,
    description: string,
    displayIcon: string,
  }]
  voiceline:{
    mediaList:[{
      wave: string
    }]
  }
}

export function useAgents() {
  const [results, setResults] = useState<PropsData[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/agents?isPlayableCharacter=true');
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
