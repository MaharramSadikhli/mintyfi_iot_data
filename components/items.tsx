import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style } from "@/app/index.style";
import { Temprature, Drop, Wind, Bulb, Users, WiFi } from './items.data';

const ItemsFirst = ({data}: any) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={style.rowContainer} >
        <Temprature data={data} />
        <Drop data={data} />
        <Wind data={data} />
      </ScrollView>
  )
}

const ItemsSecond = ({data}: any) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={style.rowContainer} >
        <Bulb data={data} />
        <Users data={data} />
        <WiFi data={data} />
      </ScrollView>
  )
}

export { ItemsFirst, ItemsSecond }

const styles = StyleSheet.create({})