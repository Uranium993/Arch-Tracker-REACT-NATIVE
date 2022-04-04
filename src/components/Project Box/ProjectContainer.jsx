import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PhasesBox from "./PhasesBox";
import Accordion from "./Accordion";

const ProjectContainer = () => {
  return (
    <View style={[styles.container, styles.shadowProp, styles.elevation]}>
      <PhasesBox />

      <View style={styles.accordion}>
        <Accordion />
      </View>
    </View>
  );
};

export default ProjectContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 7,
    backgroundColor: "white",
    height: 120,
    width: "96%",
    borderRadius: 10,
    justifyContent: "flex-start",
  },

  accordion: {
    marginTop: 6,
  },

  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 6,
    shadowColor: "#52006A",
  },
});
