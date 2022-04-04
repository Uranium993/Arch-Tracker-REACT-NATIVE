import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const PhaseBubble = ({ name, onPress, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.phaseButton,
        style.shadowProp,
        style.elevation,
        { backgroundColor: color },
      ]}
    >
      <Text style={style.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default PhaseBubble;

const style = StyleSheet.create({
  phaseButton: {
    width: Platform.OS === "ios" ? "60%" : "160%",
    height: 45,
    borderRadius: 50,
  },
  text: {
    textAlign: "center",
    marginTop: "25%",
  },
  elevation: {
    elevation: 6,
    shadowColor: "#52006A",
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
