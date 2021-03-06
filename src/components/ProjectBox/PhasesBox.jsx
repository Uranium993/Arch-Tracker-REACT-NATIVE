import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import PhaseMenu from "../ExpandableBox/PhaseMenu";

const PhasesBox = ({ singleProject }) => {
  const localDataArr = ["IDR", "IDP", "PGD", "PZI", "PIO"];

  return (
    <View style={style.container}>
      {localDataArr.map((item, index) => (
        <PhaseMenu
          singleProject={singleProject}
          name={item}
          key={item}
          arrPosition={index}
        />
      ))}

      {/* <PhaseMenu name="IDR" arrPosition={0} /> */}
      {/* <PhaseMenu name="IDP" arrPosition={1} /> */}
      {/* <PhaseMenu name="PGD" arrPosition={2} /> */}
      {/* <PhaseMenu name="PZI" arrPosition={3} /> */}
      {/* <PhaseMenu name="PIO" arrPosition={4} /> */}
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
  },
});
