import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import ModalPicker from "./ModalPicker";
import PhaseBubble from "../Project Box/PhaseBubble";

const PhaseMenu = ({ name }) => {
  const [chooseColor, setChooseColor] = useState("#bfbfbf");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool);
  };

  const setData = (option) => {
    setChooseColor(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PhaseBubble
        name={name}
        color={chooseColor}
        onPress={() => changeModalVisibility(true)}
        // style={styles.touchableOpacity}
      ></PhaseBubble>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          setData={setData}
          changeModalVisibility={changeModalVisibility}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default PhaseMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
  touchableOpacity: {
    backgroundColor: "orange",
    alignSelf: "stretch",
    padding: 10,
  },
});
