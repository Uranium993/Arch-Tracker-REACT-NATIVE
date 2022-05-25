import React, { useCallback, useEffect, useState, useReducer } from "react";
import {
  RefreshControl,
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
import { useProjectsQuery } from "../Redux/rtkQuery/api";
import AddProjectModalButton from "../components/AddProjectInputs/AddProjectModalButton";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Dashboard = () => {
  const [leftOrRight, setLeftOrRight] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  //master i filter sluze search-u
  const [masterData, setMasterData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const { testToken } = useSelector((state) => state.authReducer);

  const { data, isSuccess, error, isLoading } = useProjectsQuery(testToken);

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.clientName
          ? item.clientName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchQuery(text);
    } else {
      setFilteredData(masterData);
      setSearchQuery(text);
    }
  };

  // setujem data iz kverija u local state
  useEffect(() => {
    setMasterData(data);
    setFilteredData(masterData);
  }, [data, masterData]);

  //OVO GOVNO RADI
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setMasterData(data);
    setFilteredData(masterData);
    wait(1000).then(() => setRefreshing(false));
  }, []);

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
            <SearchBar searchFilter={searchFilter} searchQuery={searchQuery} />
          </View>
          {isLoading ? (
            <Text>LOADING...</Text>
          ) : isSuccess ? (
            <FlatList
              refreshControl={
                <RefreshControl
                  enabled={true}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
              //------------------------------------------ VOJ TI SE RENDERUJU SVI PROJEKTI --------------------------------------------------------------------------
              data={filteredData}
              renderItem={({ item }) => (
                <ProjectContainer
                  //setTestRender={setTestRender}
                  singleProject={item}
                />
              )}
              keyExtractor={(item) => item._id}
            />
          ) : null}
          {error ? <Text>{error.error}</Text> : null}
        </View>
      ) : (
        <Chart projects={filteredData} />
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
