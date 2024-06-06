import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { style } from "@/app/index.style";
import Item from "./item";

const images = {
  temp: require("../src/img/temprature.png"),
  drop: require("../src/img/drop.png"),
  wind: require("../src/img/wind.png"),
  bulb: require("../src/img/bulb.png"),
  users: require("../src/img/users.png"),
  wifi: require("../src/img/wifi.png"),
  nowifi: require("../src/img/nowifi.png"),
};

const Temprature = ({ data }: any) => {
  const new_data = data[data.length - 1];

  return (
    <View style={style.innerContainer}>
      <Item data={new_data.temp} images={images} image="temp" />
    </View>
  );
};

const Drop = ({ data }: any) => {
  const new_data = data[data.length - 1];

  return (
    <View style={style.innerContainer}>
      <Item data={new_data.hum} images={images} image="drop" />
    </View>
  );
};

const Wind = ({ data }: any) => {
  const new_data = data[data.length - 1];

  return (
    <View style={style.innerContainer}>
      <Item data={new_data.windVal} images={images} image="wind" />
    </View>
  );
};

const Bulb = ({ data }: any) => {
  const new_data = data[data.length - 1];

  return (
    <View style={style.innerContainer}>
      <Item data={new_data.powerVal} images={images} image="bulb" />
    </View>
  );
};

const Users = ({ data }: any) => {
  const new_data = data[data.length - 1];

  return (
    <View style={style.innerContainer}>
      <Item data={new_data.peopleVal} images={images} image="users" />
    </View>
  );
};

const WiFi = ({ data }: any) => {
  const new_data = data[data.length - 1];
  // console.log(new_data)

  return (
    <View style={style.innerContainer}>
      {new_data.statusCon == "true" ? (
        <Item data={new_data.statusCon} images={images} image="wifi" />
      ) : (
        <Item data={new_data.statusCon} images={images} image="nowifi" />
      )}
    </View>
  );
};

export { Temprature, Drop, Wind, Bulb, Users, WiFi };

const styles = StyleSheet.create({});

// if there was a listing

// const Temprature = ({ data }: any) => {
//   return (
//     <View>
//       <View style={style.innerContainer}>
//         <Image
//           style={style.img}
//           source={require("../src/img/temprature.png")}
//         />
//         <FlatList
//           data={data}
//           renderItem={({ item }) => (
//             <View>
//               <Text style={style.data_text}>{item.temp}</Text>
//             </View>
//           )}
//           keyExtractor={(item) => item.idTemp}
//         />
//       </View>
//     </View>
//   );
// };
