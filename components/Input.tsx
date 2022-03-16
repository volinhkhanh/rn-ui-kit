import React from "react";
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import useTheme from "../hooks/useTheme";
import { IViewStyle } from "../interfaces/IViewStyles";

export interface IInput extends TextInputProps, IViewStyle {
  children?: React.ReactNode;
  placeholderTextColor?: string;
  style?: StyleProp<ViewStyle>;
}

const Input = ({
  children,
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
  placeholderTextColor,
  style,
  ...props
}: IInput) => {
  const { sizes, colors } = useTheme();

  const inputStyle = StyleSheet.flatten([
    {
      height: sizes.inputHeight,
      borderRadius: sizes.inputRadius,
      borderWidth: sizes.inputBorder,
      borderColor: colors.inputBorder,
      paddingHorizontal: sizes.base,
    },
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
  ]) as ViewStyle;

  return (
    <TextInput
      style={inputStyle}
      placeholderTextColor={placeholderTextColor || colors.inputBorder}
      {...props}
    >
      {children}
    </TextInput>
  );
};

export default Input;
