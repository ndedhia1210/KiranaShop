/**
 *
 * This file contains reusable css styles to be used across the app
 *
 */

import { Platform } from "react-native";

import colors from "./colors";

export default {
  text: {
    color: colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica",
  },
  buttonText: {
    fontSize: 20,
  },
};
