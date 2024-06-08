import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style } from '@/app/index.style';

const ErrorComponent = ({error}: any) => {
    return (
        <View style={style.loadingContainer}>
          <Text>Error loading fonts: {error}</Text>
        </View>
      );
}

export default ErrorComponent