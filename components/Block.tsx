import React from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";

import { IViewStyle } from "../interfaces/IViewStyles";

export interface IBlock extends IViewStyle {
  children?: React.ReactNode;
  flex?: ViewStyle["flex"];
  row?: boolean;
  color?: ViewStyle["backgroundColor"];
  radius?: ViewStyle["borderRadius"];
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  style?: StyleProp<ViewStyle>;
}

const Block = ({
  children,
  flex,
  row,
  color,
  radius,
  align,
  justify,
  mt,
  mb,
  mr,
  ml,
  mh,
  mv,
  pt,
  pb,
  pr,
  pl,
  ph,
  pv,
  style,
  ...props
}: IBlock) => {
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && { flex },
    row !== undefined && { flexDirection: "row" },
    color !== undefined && { backgroundColor: color },
    radius !== undefined && { borderRadius: radius },
    align !== undefined && { alignItems: align },
    justify !== undefined && { justifyContent: justify },
    mt !== undefined && { marginTop: mt },
    mb !== undefined && { marginBottom: mb },
    mr !== undefined && { marginRight: mr },
    ml !== undefined && { marginLeft: ml },
    mh !== undefined && { marginHorizontal: mh },
    mv !== undefined && { marginVertical: mv },
    pt !== undefined && { paddingTop: pt },
    pb !== undefined && { paddingBottom: pb },
    pr !== undefined && { paddingRight: pr },
    pl !== undefined && { paddingLeft: pl },
    ph !== undefined && { paddingHorizontal: ph },
    pv !== undefined && { paddingVertical: pv },
    style,
  ]) as ViewStyle;

  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default Block;
