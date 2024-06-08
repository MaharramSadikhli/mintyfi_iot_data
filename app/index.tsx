import AppComponent from "../components/app.component";
import IotData from "@/hook/hook.iot.data";

export default function Index() {
  const {
    temperatureData,
    humidityData,
    windData,
    powerData,
    peopleData,
    connectionData,
  } = IotData();

  return (
    <AppComponent
      temp={temperatureData}
      hum={humidityData}
      wind={windData}
      power={powerData}
      people={peopleData}
      connection={connectionData}
    />
  );
}
