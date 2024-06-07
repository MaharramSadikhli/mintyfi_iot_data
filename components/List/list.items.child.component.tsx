import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { style } from "@/app/index.style";

const images = {
  temp: require("../../src/img/temprature.png"),
  drop: require("../../src/img/drop.png"),
  wind: require("../../src/img/wind.png"),
  bulb: require("../../src/img/bulb.png"),
  users: require("../../src/img/users.png"),
  wifi: require("../../src/img/wifi.png"),
  nowifi: require("../../src/img/nowifi.png"),
};

const ListTemprature = ({ data }: any) => {
  return (
    <View>
      <View style={style.listInnerContainer}>
        <Image style={style.img} source={images["temp"]} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text style={style.data_text}>{item.temp}</Text>
            </View>
          )}
          keyExtractor={(item) => item.idTemp}
        />
      </View>
    </View>
  );
};

const ListDrop = ({ data }: any) => {
  return (
    <View>
      <View style={style.listInnerContainer}>
        <Image style={style.img} source={images["drop"]} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text style={style.data_text}>{item.hum}</Text>
            </View>
          )}
          keyExtractor={(item) => item.idHum}
        />
      </View>
    </View>
  );
};

const ListWind = ({ data }: any) => {
  return (
    <View>
      <View style={style.listInnerContainer}>
        <Image style={style.img} source={images["wind"]} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text style={style.data_text}>{item.windVal}</Text>
            </View>
          )}
          keyExtractor={(item) => item.idWind}
        />
      </View>
    </View>
  );
};

const ListBulb = ({ data }: any) => {
  return (
    <View>
      <View style={style.listInnerContainer}>
        <Image style={style.img} source={images["bulb"]} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text style={style.data_text}>{item.powerVal}</Text>
            </View>
          )}
          keyExtractor={(item) => item.idPower}
        />
      </View>
    </View>
  );
};

const ListUsers = ({ data }: any) => {
  return (
    <View>
      <View style={style.listInnerContainer}>
        <Image style={style.img} source={images["users"]} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text style={style.data_text}>{item.peopleVal}</Text>
            </View>
          )}
          keyExtractor={(item) => item.idPeople}
        />
      </View>
    </View>
  );
};

const ListWifi = ({ data }: any) => {
  const connection = data[data.length - 1].statusCon;
  console.log(connection);
  return (
    <View>
      <View style={style.listInnerContainer}>
        {connection == "true" ? (
          <Image style={style.img} source={images["wifi"]} />
        ) : (
          <Image style={style.img} source={images["nowifi"]} />
        )}

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text style={style.data_text}>{item.statusCon}</Text>
            </View>
          )}
          keyExtractor={(item) => item.idCon}
        />
      </View>
    </View>
  );
};

export { ListTemprature, ListDrop, ListWind, ListBulb, ListUsers, ListWifi };
