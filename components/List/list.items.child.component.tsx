import { Text, View } from "react-native";
import React, { useState } from "react";
import { style } from "@/app/index.style";
import ListItem from "./list.item";

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
    <ListItem
      data={data}
      images={images}
      image="temp"
      flatItem={({ item }: any) => (
        <View>
          <Text style={style.data_text}>{item.temp}</Text>
        </View>
      )}
      flatKey={(item: any) => item.idTemp}
    />
  );
};

const ListDrop = ({ data }: any) => {
  return (
    <ListItem
      data={data}
      images={images}
      image="drop"
      flatItem={({ item }: any) => (
        <View>
          <Text style={style.data_text}>{item.hum}</Text>
        </View>
      )}
      flatKey={(item: any) => item.idHum}
    />
  );
};

const ListWind = ({ data }: any) => {
  return (
    <ListItem
      data={data}
      images={images}
      image="wind"
      flatItem={({ item }: any) => (
        <View>
          <Text style={style.data_text}>{item.windVal}</Text>
        </View>
      )}
      flatKey={(item: any) => item.idWind}
    />
  );
};

const ListBulb = ({ data }: any) => {
  return (
    <ListItem
      data={data}
      images={images}
      image="bulb"
      flatItem={({ item }: any) => (
        <View>
          <Text style={style.data_text}>{item.powerVal}</Text>
        </View>
      )}
      flatKey={(item: any) => item.idPower}
    />
  );
};

const ListUsers = ({ data }: any) => {
  return (
    <ListItem
      data={data}
      images={images}
      image="users"
      flatItem={({ item }: any) => (
        <View>
          <Text style={style.data_text}>{item.peopleVal}</Text>
        </View>
      )}
      flatKey={(item: any) => item.idPeople}
    />
  );
};

const ListWifi = ({ data }: any) => {
  if (data.length > 0) {
    const connection = data[data.length - 1].statusCon;
    console.log(connection);

    if (connection == "true") {
      return (
        <ListItem
          data={data}
          images={images}
          image="wifi"
          flatItem={({ item }: any) => (
            <View>
              <Text style={style.data_text}>{item.statusCon}</Text>
            </View>
          )}
          flatKey={(item: any) => item.idCon}
        />
      );
    } else {
      return (
        <ListItem
          data={data}
          images={images}
          image="nowifi"
          flatItem={({ item }: any) => (
            <View>
              <Text style={style.data_text}>{item.statusCon}</Text>
            </View>
          )}
          flatKey={(item: any) => item.idCon}
        />
      );
    }
  }
};

export { ListTemprature, ListDrop, ListWind, ListBulb, ListUsers, ListWifi };
