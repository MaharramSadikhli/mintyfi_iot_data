import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { style } from "./index.style";
import Items from "@/components/items";

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
      <Items data={data} />
    </SafeAreaView>
  );
}
