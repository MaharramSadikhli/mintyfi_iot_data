import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { Container, RowContainer, InnerContainer, DataText, DataImage, LogoContainer, LogoImage, ListInnerContainer } from "@/src/style";

export const style = StyleSheet.create({
  container: Container,
  rowContainer: RowContainer,
  innerContainer: InnerContainer,
  listInnerContainer: ListInnerContainer,
  data_text: DataText,
  img: DataImage,
  logo_container: LogoContainer,
  logo_image: LogoImage,
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
