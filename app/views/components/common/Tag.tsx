import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../../styles/colors";

export enum TAG_TYPE {
  CUSTOM = "custom",
  BEST_VALUE = "Best value",
  POPULAR = "Popular",
}

interface props {
  type: TAG_TYPE;
  content?: string;
  size?: number;
  textColor?: string;
  backgroundColor?: string;
  style?: any;
}

export function Tag({
  type,
  content = "",
  size = 16,
  textColor = colors.sb_bright,
  backgroundColor = colors.sb_green_100,
  style = {},
}) {
  if (type === TAG_TYPE.CUSTOM && content.trim() === "") {
    return <></>;
  }

  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <Text style={[{ fontSize: size }, { color: textColor }]}>
        {type === TAG_TYPE.CUSTOM ? content : type}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
});
