import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import PhasesBox from "./PhasesBox";
import Accordion from "./Accordion";

const ProjectContainer = ({ singleProject }) => {
  const [expandContainer, setExpandContainer] = useState(false);

  return (
    <View
      style={[
        styles.container,
        styles.shadowProp,
        styles.elevation,
        {
          height: expandContainer ? 280 : 85,
        },
      ]}
    >
      <Accordion
        singleProject={singleProject}
        setExpandContainer={setExpandContainer}
      />

      <PhasesBox />
    </View>
  );
};

export default ProjectContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "column",
    margin: 7,
    backgroundColor: "white",
    width: "96%",
    borderRadius: 10,
    justifyContent: "flex-start",
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
