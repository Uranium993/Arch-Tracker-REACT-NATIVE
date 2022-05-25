import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import ModalPicker from "./ModalPicker";
import PhaseBubble from "../ProjectBox/PhaseBubble";
import { useUpdatePhaseMutation } from "../../Redux/rtkQuery/api";
import { useSelector } from "react-redux";

const PhaseMenu = ({ name, singleProject, arrPosition }) => {
  const { color, date } = singleProject.phases[arrPosition];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool);
  };

  const { testToken } = useSelector((state) => state.authReducer);

  const [updatePhase] = useUpdatePhaseMutation();

  const setData = useCallback(async (option) => {
    const colorData = {
      token: testToken,
      id: singleProject._id,
      name,
      color: option,
      date: new Date().toLocaleDateString(),
    };

    await updatePhase(colorData);
  });

  return (
    <SafeAreaView style={styles.container}>
      <PhaseBubble
        name={name}
        color={color}
        onPress={() => changeModalVisibility(true)}
      ></PhaseBubble>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          date={date}
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
  dates: {
    marginTop: 3,
    fontSize: 12,
  },
});
