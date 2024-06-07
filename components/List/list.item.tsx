import { Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { style } from '@/app/index.style'

const ListItem = ({data, images, image, flatItem, flatKey}: any) => {
  return (
    <View>
      <View style={style.listInnerContainer}>
        <Image style={style.img} source={images[image]} />
        <FlatList
          data={data}
          renderItem={flatItem}
          keyExtractor={flatKey}
        />
      </View>
    </View>
  )
}

export default ListItem