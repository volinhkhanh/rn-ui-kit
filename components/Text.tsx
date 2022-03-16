import React from "react";
import {
  Text as RNText,
  StyleSheet,
  TextStyle,
  StyleProp,
  ViewStyle,
} from "react-native";
import useTheme from "../hooks/useTheme";

interface IText extends TextStyle {
  children?: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  p?: boolean;
  size?: TextStyle["fontSize"];
  color?: TextStyle["color"];
  weight?: TextStyle["fontWeight"];
  align?: TextStyle["textAlign"];
  style?: StyleProp<ViewStyle>;
}

const Text = ({
  children,
  h1,
  h2,
  h3,
  h4,
  p,
  size,
  color,
  weight,
  align,
  style,
  ...props
}: IText) => {
  const { sizes, lines, letters, colors } = useTheme();
  const textStyle = StyleSheet.flatten([
    {
      color: colors.text,
      fontSize: sizes.text,
      lineHeight: lines.text,
      letterSpacing: letters.text,
    },
    h1 !== undefined && {
      fontSize: sizes.h1,
      fontWeight: "800",
      lineHeight: lines.h1,
      letterSpacing: letters.h1,
    },
    h2 !== undefined && {
      fontSize: sizes.h2,
      fontWeight: "700",
      lineHeight: lines.h2,
      letterSpacing: letters.h2,
    },
    h3 !== undefined && {
      fontSize: sizes.h3,
      fontWeight: "600",
      lineHeight: lines.h3,
      letterSpacing: letters.h3,
    },
    h4 !== undefined && {
      fontSize: sizes.h4,
      fontWeight: "500",
      lineHeight: lines.h4,
      letterSpacing: letters.h4,
    },
    p !== undefined && {
      fontSize: sizes.p,
      fontWeight: "400",
      lineHeight: lines.p,
      letterSpacing: letters.p,
    },
    size !== undefined && { fontSize: size },
    color !== undefined && { color: color },
    weight !== undefined && { fontWeight: weight },
    align !== undefined && { textAlign: align },
    style,
  ]) as TextStyle;

  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
