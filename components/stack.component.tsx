import React from 'react'
import { Stack } from 'expo-router';

const StackComponent = () => {
    return (
        <Stack>
          <Stack.Screen name="index" options={{ headerTitle: "Mintyfi IOT", headerTitleAlign:"center" }} />
        </Stack>
      );
}

export default StackComponent
