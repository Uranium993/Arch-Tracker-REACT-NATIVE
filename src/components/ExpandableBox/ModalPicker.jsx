import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

const OPTIONS = [
  ["in preparation", "#40a9ff"],
  ["pending", "#ffa940"],
  ["success", "#73d13d"],
  ["rejected", "#ff4d4f"],
  ["retry", "#9254de"],
];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ModalPicker = (props) => {
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item[1])}
      >
        <Text style={[styles.text, { color: item[1] }]}>{item[0]}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
        <ScrollView>{option}</ScrollView>
        <Text style={styles.date}>Last Updated: {props.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModalPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    height: 800,
    borderWidth: 1,
  },
  option: {
    alignItems: "flex-start",
  },
  text: {
    margin: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    marginBottom: 15,
    marginLeft: "55%",
  },
});
