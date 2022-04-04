import { View, StyleSheet } from "react-native";
import React from "react";
import PhaseMenu from "../ExpandableBox.jsx/PhaseMenu";

const PhasesBox = () => {
  return (
    <View style={style.container}>
      <PhaseMenu name="IDR" />
      <PhaseMenu name="IDP" />
      <PhaseMenu name="PZI" />
      <PhaseMenu name="PIO" />
      <PhaseMenu name="WUT" />
    </View>
  );
};

export default PhasesBox;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: 50,
    marginTop: 5,
  },
});
