import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const useFonts = (fontMap: Record<string, Font.FontSource>) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync(fontMap);
        setFontsLoaded(true);
      } catch (e) {
        setError(e as Error);
      }
    };

    loadFonts();
  }, [fontMap]);

  return [fontsLoaded, error] as const;
};

export default useFonts;