import { useEffect, useState } from "react";
import { SafeAreaView, Image } from "react-native";
import { style } from "./index.style";
import { ItemsFirst, ItemsSecond } from "@/components/items";
import Logo from "@/components/logo";

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
      <Logo />
      <ItemsFirst data={data} />
      <ItemsSecond data={data} />
    </SafeAreaView>
  );
}
