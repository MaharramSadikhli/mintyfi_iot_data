import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style } from "@/app/index.style";
import { Temprature, Drop } from './items.data';

const Items = ({data}: any) => {
  return (
    <View style={style.rowContainer} >
        <Temprature data={data} />
        <Drop data={data} />
      </View>
  )
}

export default Items

const styles = StyleSheet.create({})