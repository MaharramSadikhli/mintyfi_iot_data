import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { style } from '@/app/index.style'

const Logo = () => {
  return (
    <View style={style.logo_container}>
      <Image style={style.logo_image}  source={require("../src/img/logo.png")} />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({})