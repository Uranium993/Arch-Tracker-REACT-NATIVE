import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import ProjectContainer from "../components/ProjectBox/ProjectContainer";
import SearchBar from "../components/LoginInputs/SearchBar";
import Chart from "../components/Charts/Chart";
import { projectList } from "../Redux/rtkQuery/api";
import AddProjectModalButton from "../components/AddProjectInputs/AddProjectModalButton";

const Dashboard = () => {
  const [leftOrRight, setLeftOrRight] = useState(true);
  const { data, error, isLoading, isSuccess } = projectList.useProjectsQuery();

  return (
    <View>
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => setLeftOrRight(true)}
          style={[styles.tab, { borderBottomWidth: leftOrRight ? 1 : 0 }]}
        >
          <Text style={styles.text}> Dashboard </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setLeftOrRight(false)}
          style={[styles.tab, { borderBottomWidth: leftOrRight ? 0 : 1 }]}
        >
          <Text style={styles.text}>Charts</Text>
        </TouchableOpacity>
      </View>

      {leftOrRight ? (
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <AddProjectModalButton />
            <SearchBar />
          </View>
          {isLoading ? (
            <Text>LOADING...</Text>
          ) : isSuccess ? (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ProjectContainer singleProject={item} />
              )}
              keyExtractor={(item) => item._id}
            />
          ) : null}
          {error ? <Text>{error.error}</Text> : null}
        </View>
      ) : (
        <Chart />
      )}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 0,
    margin: 5,
    paddingBottom: 0,
  },
  tab: {
    width: "50%",
    paddingBottom: 10,
    borderBottomColor: "#722ed1",
  },
  text: { textAlign: "center", fontSize: 20 },
});
