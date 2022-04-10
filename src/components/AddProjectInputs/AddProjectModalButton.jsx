import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import React, { useState } from "react";
import AddProjectBtn from "../Buttons/AddProjectBtn";
import AddProjectModalForm from "./AddProjectModalForm";

const AddProjectModalButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool);
  };

  return (
    <View>
      <AddProjectBtn
        changeModalVisibility={changeModalVisibility}
        setIsModalVisible={setIsModalVisible}
      />
      <SafeAreaView>
        <Modal
          transparent={false}
          animationType="fade"
          visible={isModalVisible}
          onRequestClose={() => changeModalVisibility(false)}
        >
          <AddProjectModalForm changeModalVisibility={changeModalVisibility} />
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default AddProjectModalButton;
