import { useEffect, useState } from "react";
import { SafeAreaView, Image } from "react-native";
import { style } from "./index.style";
import { ItemsFirst, ItemsSecond } from "@/components/items.parent.component";
import Logo from "@/components/logo";
import { ListItemsFirst, ListItemsSecond } from "@/components/List/list.items.parent.component";




interface Temperature {
  idTemp: string;
  temp: string;
}

interface Humidity {
  idHum: string;
  hum: string;
}

interface Wind {
  idWind: string;
  windVal: string;
}

interface Power {
  idPower: string;
  powerVal: string;
}

interface People {
  idPeople: string;
  peopleVal: string;
}

interface Connection {
  idCon: string;
  statusCon: string;
}

export default function Index() {

  const [temperatureData, setTemperatureData] = useState<Temperature[]>([]);
  const [humidityData, setHumidityData] = useState<Humidity[]>([]);
  const [windData, setWindData] = useState<Wind[]>([]);
  const [powerData, setPowerData] = useState<Power[]>([]);
  const [peopleData, setPeopleData] = useState<People[]>([]);
  const [connectionData, setConnectionData] = useState<Connection[]>([]);

  const getData = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/MaharramSadikhli/APIs/main/iot_ap_newi.json");
      const json = await response.json();
      setTemperatureData(json[0].temprature);
      setHumidityData(json[1].humidity);
      setWindData(json[2].wind);
      setPowerData(json[3].power);
      setPeopleData(json[4].people);
      setConnectionData(json[5].connection);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Logo />
      <ItemsFirst data1={temperatureData}  data2={humidityData} data3={windData}/>
      <ItemsSecond data4={powerData} data5={peopleData} data6={connectionData}/>
      {/* <ListItemsFirst data1={temperatureData}  data2={humidityData} data3={windData}/>
      <ListItemsSecond data4={powerData} data5={peopleData} data6={connectionData} /> */}
    </SafeAreaView>
  );
}
