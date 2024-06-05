import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { style } from "./index.style";
import {Temprature, Drop} from "@/components/items.data";

type Movie = {
  id: string;
  title: string;
  image: string;
};

export default function Index() {
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.rowContainer} >
        <Temprature data={data} />
        <Drop data={data} />
      </View>

    </SafeAreaView>
  );
}
