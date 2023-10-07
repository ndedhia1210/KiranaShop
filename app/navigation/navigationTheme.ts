import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../views/styles";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.sb_yellow_100,
    background: colors.sb_bright,
  },
};
