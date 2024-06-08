import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import Logo from "@/components/logo";
import { ItemsFirst, ItemsSecond } from "@/components/items.parent.component";
import { ListItemsFirst, ListItemsSecond } from "@/components/List/list.items.parent.component";
import { style } from "../app/index.style";

const AppComponent = ({ temp, hum, wind, power, people, connection }: any) => {
  const isList = false;

  if (isList) {
    return (
      <SafeAreaView style={style.container}>
        <Logo />
        <ListItemsFirst data1={temp}  data2={hum} data3={wind}/>
        <ListItemsSecond data4={power} data5={people} data6={connection} />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={style.container}>
        <Logo />
        <ItemsFirst data1={temp} data2={hum} data3={wind} />
        <ItemsSecond data4={power} data5={people} data6={connection} />
      </SafeAreaView>
    );
  }
};

export default AppComponent;
