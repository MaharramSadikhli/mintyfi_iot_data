import { Stack } from "expo-router";
import React, {useEffect} from "react";
import * as  Font from 'expo-font';

export default function RootLayout() {

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Sofia-Regular': require('../assets/fonts/Sofia-Regular.ttf'),
        'ArchitectsDaughter-Regular': require('../assets/fonts/ArchitectsDaughter-Regular.ttf'),
        'RedditMono-VariableFont_wght': require('../assets/fonts/RedditMono-VariableFont_wght.ttf'),
      });
    };

    loadFonts();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Mintyfi IOT", headerTitleAlign:"center" }} />
    </Stack>
  );
}
