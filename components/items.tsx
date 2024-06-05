import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style } from "@/app/index.style";
import { Temprature, Drop, Wind, Bulb, Users, WiFi } from './items.data';

const Items = ({data}: any) => {
  return (
    <View style={style.rowContainer} >
        <Temprature data={data} />
        <Drop data={data} />
        <Wind data={data} />
        <Bulb data={data} />
        <Users data={data} />
        <WiFi data={data} />
      </View>
  )
}

export default Items

const styles = StyleSheet.create({})