import { ScrollView} from 'react-native'
import React from 'react'
import { style } from "@/app/index.style";
import { Temprature, Drop, Wind, Bulb, Users, WiFi } from './items.data';

const ItemsFirst = ({data1, data2, data3}: any) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={style.rowContainer} >
        <Temprature data={data1} />
        <Drop data={data2} />
        <Wind data={data3} />
      </ScrollView>
  )
}

const ItemsSecond = ({data4, data5, data6}: any) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={style.rowContainer} >
        <Bulb data={data4} />
        <Users data={data5} />
        <WiFi data={data6} />
      </ScrollView>
  )
}

export { ItemsFirst, ItemsSecond }