import { useState, useEffect } from "react";
import "./iot.data.interface";

const IotData = () => {
  const [temperatureData, setTemperatureData] = useState<Temperature[]>([]);
  const [humidityData, setHumidityData] = useState<Humidity[]>([]);
  const [windData, setWindData] = useState<Wind[]>([]);
  const [powerData, setPowerData] = useState<Power[]>([]);
  const [peopleData, setPeopleData] = useState<People[]>([]);
  const [connectionData, setConnectionData] = useState<Connection[]>([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/MaharramSadikhli/APIs/main/iot_ap_newi.json"
      );
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

  return {
    temperatureData,
    humidityData,
    windData,
    powerData,
    peopleData,
    connectionData,
  };
};

export default IotData;
