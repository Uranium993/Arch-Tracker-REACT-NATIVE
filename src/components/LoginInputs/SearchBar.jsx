import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBar = ({ searchFilter, searchQuery }) => {
  return (
    <Searchbar
      style={styles.container}
      placeholder="Search"
      onChangeText={(text) => searchFilter(text)}
      value={searchQuery}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "55%",
    marginTop: 7,
    left: Platform.OS === "ios" ? 10 : 7,
    height: 35,
  },
});
