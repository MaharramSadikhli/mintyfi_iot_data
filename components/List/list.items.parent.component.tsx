import { ScrollView} from 'react-native'
import React from 'react'
import { style } from "@/app/index.style";
import { ListTemprature, ListDrop, ListWind, ListBulb, ListUsers, ListWifi } from './list.items.child.component';

const ListItemsFirst = ({data1, data2, data3}: any) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={style.rowContainer} >
        <ListTemprature data={data1} />
        <ListDrop data={data2} />
        <ListWind data={data3} />
      </ScrollView>
  )
}

const ListItemsSecond = ({data4, data5, data6}: any) => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={style.rowContainer} >
        <ListBulb data={data4} />
        <ListUsers data={data5} />
        <ListWifi data={data6} />
      </ScrollView>
  )
}

export { ListItemsFirst, ListItemsSecond }