import { Text, View, Image, FlatList } from "react-native";
import React from "react";
import { style } from "@/app/index.style";

const Item = ({ data, images, image }: any) => {


  return (
    <View style={style.innerContainer}>
      <Image style={style.img} source={images[image]} />
      <Text style={style.data_text}>{data}</Text>
    </View>
  );
};

export default Item;

