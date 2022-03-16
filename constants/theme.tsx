import { ColorValue, StyleSheet } from "react-native";

export interface ISpacing {
  xs: number;
  s: number;
  sm: number;
  m: number;
  md: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface ISizes {
  base: number;
  text: number;
  padding: number;

  //text sizes
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  p: number;

  //button sizes
  buttonHeight?: number;
  buttonRadius?: number;
  buttonBorder?: number;

  //button sizes
  inputHeight?: number;
  inputRadius?: number;
  inputBorder?: number;
}

export interface ILineHeights {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  p: number;
  text: number;
}

export interface ILetterSpacing {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  p: number;
  text: number;
}

export interface IColors {
  primary: ColorValue,
  secondary: ColorValue,
  tertiary: ColorValue,
  text: ColorValue,
  success: ColorValue,
  warning: ColorValue,
  error: ColorValue,
  white: ColorValue,
  black: ColorValue,
  // button colors
  buttonBorder: ColorValue,
   // input colors
  inputBorder: ColorValue,
}

export interface ITheme {
  sizes: ISizes & ISpacing;
  lines: ILineHeights;
  letters: ILetterSpacing;
  colors: IColors,
}

const TEXT_SIZE = 16;

export const COLORS = {
  primary: "#3E8EF4",
  secondary: "#FD9900",
  tertiary: "#FE9EF4",
  text: "#14191F",
  success: "#64BC26",
  warning: "#FD9900",
  error: "#FE2712",
  white: "#FFFFFF",
  black: "#000000",
  // button colors
  buttonBorder: "rgba(0,0,0,0.5)",
   // input colors
   inputBorder: "rgba(0,0,0,0.5)",
}

export const SIZES = {
  base: 8,
  text: TEXT_SIZE,
  padding: 20,

  //text sizes
  h1: TEXT_SIZE + 2 * 8,
  h2: TEXT_SIZE + 2 * 6,
  h3: TEXT_SIZE + 2 * 4,
  h4: TEXT_SIZE + 2 * 2,
  p: TEXT_SIZE + 2,
  small: TEXT_SIZE - 2,

  //button sizes
  buttonHeight: 40,
  buttonRadius: 4,
  buttonBorder: 0,

  //button sizes
  inputHeight: 40,
  inputRadius: 4,
  inputBorder: StyleSheet.hairlineWidth,
};

export const LINE_HEIGHTS = {
  h1: Math.round(SIZES.h1 * 1.1),
  h2: Math.round(SIZES.h2 * 1.2),
  h3: Math.round(SIZES.h3 * 1.3),
  h4: Math.round(SIZES.h4 * 1.3),
  p: Math.round(SIZES.p * 1.3),
  text: Math.round(SIZES.text * 1.3),
  small: Math.round(SIZES.small),
};

export const LETTER_SPACING = {
  h1: -SIZES.h1 * 0.03,
  h2: -SIZES.h2 * 0.03,
  h3: -SIZES.h3 * 0.03,
  h4: -SIZES.h4 * 0.03,
  p: 0,
  text: 0,
  small: 0,
};

export const SPACING = {
  xs: SIZES.base / 2, // 4
  s: SIZES.base, // 8
  sm: SIZES.base * 1.5, // 12
  m: SIZES.base * 2, // 16
  md: SIZES.base * 2.5, // 20
  l: SIZES.base * 3, // 24
  xl: SIZES.base * 3.5, // 28
  xxl: SIZES.base * 4, // 32
};

export const THEME: ITheme = {
  sizes: {
    ...SIZES,
    ...SPACING,
  },
  lines: LINE_HEIGHTS,
  letters: LETTER_SPACING,
  colors: COLORS,
};

export default THEME;
