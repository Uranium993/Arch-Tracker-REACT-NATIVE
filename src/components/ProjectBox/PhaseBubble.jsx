import React from "react";
import { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

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
    width: Platform.OS === "ios" ? "80%" : "190%",
    height: 35,
    borderRadius: 20,
  },
  text: {
    textAlign: "center",
    marginTop: "14%",
  },
  elevation: {
    elevation: 5,
    shadowColor: "#52006A",
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
