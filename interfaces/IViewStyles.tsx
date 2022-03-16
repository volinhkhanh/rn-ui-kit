import { ViewStyle, ViewProps } from "react-native";

export interface IViewStyle extends ViewProps {
  margin?: ViewStyle["margin"];
  mt?: ViewStyle["marginTop"];
  mb?: ViewStyle["marginBottom"];
  mr?: ViewStyle["marginRight"];
  ml?: ViewStyle["marginLeft"];
  mh?: ViewStyle["marginHorizontal"];
  mv?: ViewStyle["marginVertical"];
  padding?: ViewStyle["padding"];
  pt?: ViewStyle["paddingTop"];
  pb?: ViewStyle["paddingBottom"];
  pr?: ViewStyle["paddingRight"];
  pl?: ViewStyle["paddingLeft"];
  ph?: ViewStyle["paddingHorizontal"];
  pv?: ViewStyle["paddingVertical"];
}
