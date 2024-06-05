import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { style } from "@/app/index.style";
import Item from "./item";

const images = {
  temp: require("../src/img/temprature.png"),
  drop: require("../src/img/drop.png"),
};


const Temprature = ({ data }: any) => {
  return (
    <View style={style.innerContainer}>
      <View>
        <Item data={data} images={images} image="temp" />
      </View>
    </View>
  );
};

const Drop = ({data}: any) => {
  return (
    <View>
      <Item data={data} images={images} image="drop" />
    </View>
  )
}

export {Temprature, Drop} ;

const styles = StyleSheet.create({});
