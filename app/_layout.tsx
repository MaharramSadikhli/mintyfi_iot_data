import { Stack } from "expo-router";
import React, {useEffect, useState} from "react";
import * as  Font from 'expo-font';
import { ActivityIndicator, View } from "react-native";
import { style } from "./index.style";

export default function RootLayout() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Sofia-Regular': require('../assets/fonts/Sofia-Regular.ttf'),
        'ArchitectsDaughter-Regular': require('../assets/fonts/ArchitectsDaughter-Regular.ttf'),
        'RedditMono-VariableFont_wght': require('../assets/fonts/RedditMono-VariableFont_wght.ttf'),
      });

      setFontsLoaded(true);

    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={style.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Mintyfi IOT", headerTitleAlign:"center" }} />
    </Stack>
  );
}

