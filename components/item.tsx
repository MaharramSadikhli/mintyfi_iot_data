import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { style } from "@/app/index.style";

const item = ({ data, images, image }: any) => {
  return (
    <View style={style.innerContainer}>
      <Image style={style.img} source={images[image]} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text style={style.data_text}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default item;

const styles = StyleSheet.create({});
