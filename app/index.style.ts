import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.background,
  },
  rowContainer: {
    flexDirection: "row",
  },
  innerContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.background
  },
  title: {
    fontSize: 20,
    color: Colors.light.text,
    fontWeight: "bold",
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: "contain"
  },
});
