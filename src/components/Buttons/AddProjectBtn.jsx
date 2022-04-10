import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
const AddProjectBtn = ({ setIsModalVisible }) => {
  return (
    <Button
      onPress={() => setIsModalVisible(true)}
      compact={true}
      mode="outlined"
      color="#52c41a"
      style={[styles.container, styles.shadowProp]}
    >
      Add Project
    </Button>
  );
};

export default AddProjectBtn;

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    marginLeft: -17,
    width: "150%",
  },
  //   shadowProp: {
  //     shadowColor: "black",
  //     shadowOffset: { width: -2, height: 2 },
  //     shadowOpacity: 0.3,
  //     shadowRadius: 2,
  //   },
});
