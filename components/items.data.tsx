import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { style } from "@/app/index.style";
import Item from "./item";

const images = {
  temp: require("../src/img/temprature.png"),
  drop: require("../src/img/drop.png"),
  wind: require("../src/img/wind.png"),
  bulb: require("../src/img/bulb.png"),
  users: require("../src/img/users.png"),
  wifi: require("../src/img/wifi.png"),
};

const Temprature = ({ data }: any) => {
  return (
    <View>
      <Item data={data} images={images} image="temp" />
    </View>
  );
};

const Drop = ({ data }: any) => {
  return (
    <View>
      <Item data={data} images={images} image="drop" />
    </View>
  );
};

const Wind = ({ data }: any) => {
  return (
    <View>
      <Item data={data} images={images} image="wind" />
    </View>
  );
};

const Bulb = ({ data }: any) => {
  return (
    <View>
      <Item data={data} images={images} image="bulb" />
    </View>
  );
};

const Users = ({ data }: any) => {
  return (
    <View>
      <Item data={data} images={images} image="users" />
    </View>
  );
};

const WiFi = ({ data }: any) => {
  return (
    <View>
      <Item data={data} images={images} image="wifi" />
    </View>
  );
};

export { Temprature, Drop, Wind, Bulb, Users, WiFi };

const styles = StyleSheet.create({});
