import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import useTheme from "../hooks/useTheme";

import { IViewStyle } from "../interfaces/IViewStyles";

interface IButton extends IViewStyle, TouchableOpacityProps {
  children?: React.ReactNode;
  color?: ViewStyle["backgroundColor"];
  radius?: ViewStyle["borderRadius"];
  center?: boolean;
  activeOpacity?: number,
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  children,
  color,
  radius,
  center,
  margin,
  mt,
  mb,
  mr,
  ml,
  mh,
  mv,
  padding,
  pt,
  pb,
  pr,
  pl,
  ph,
  pv,
  activeOpacity = 0.2,
  style,
  ...props
}: IButton) => {
  const { sizes, colors } = useTheme();

  const buttonStyle = StyleSheet.flatten([
    {
      height: sizes.buttonHeight,
      borderRadius: sizes.buttonRadius,
      borderWidth: sizes.buttonBorder,
      borderColor: colors.buttonBorder,
      paddingHorizontal: sizes.base,
    },
    color !== undefined && { backgroundColor: color },
    radius !== undefined && { borderRadius: radius },
    center !== undefined && { alignItems: "center", justifyContent: "center" },
    margin !== undefined && { margin },
    mt !== undefined && { marginTop: mt },
    mb !== undefined && { marginBottom: mb },
    mr !== undefined && { marginRight: mr },
    ml !== undefined && { marginLeft: ml },
    mh !== undefined && { marginHorizontal: mh },
    mv !== undefined && { marginVertical: mv },
    padding !== undefined && { padding },
    pt !== undefined && { paddingTop: pt },
    pb !== undefined && { paddingBottom: pb },
    pr !== undefined && { paddingRight: pr },
    pl !== undefined && { paddingLeft: pl },
    ph !== undefined && { paddingHorizontal: ph },
    pv !== undefined && { paddingVertical: pv },
    style,
  ]) as IButton;

  return (
    <TouchableOpacity
      style={buttonStyle}
      activeOpacity={activeOpacity}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
