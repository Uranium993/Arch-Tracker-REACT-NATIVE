import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import ProjectContainer from "../components/Project Box/ProjectContainer";
import PhaseMenu from "../components/ExpandableBox.jsx/PhaseMenu";

const Dashboard = () => {
  const navigation = useNavigation();

  // const { userName } = useSelector((state) => state.authReducer);

  // console.log(userName);

  return (
    <View>
      <ProjectContainer />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
