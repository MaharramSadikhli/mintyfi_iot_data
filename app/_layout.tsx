import React from "react";
import { useFonts } from "expo-font";
import StackComponent from "@/components/stack.component";
import LoadingComponent from "@/components/loading.component";
import ErrorComponent from "@/components/error.component";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Sofia-Regular": require("../assets/fonts/Sofia-Regular.ttf"),
    "ArchitectsDaughter-Regular": require("../assets/fonts/ArchitectsDaughter-Regular.ttf"),
    "RedditMono-VariableFont_wght": require("../assets/fonts/RedditMono-VariableFont_wght.ttf"),
  });

  if (fontError) return <ErrorComponent error={fontError.message} />;
  if (!fontsLoaded) return <LoadingComponent />;
  return <StackComponent />;
}
