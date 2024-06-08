import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style } from '@/app/index.style';

const LoadingComponent = () => {
    return (
        <View style={style.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
}

export default LoadingComponent
