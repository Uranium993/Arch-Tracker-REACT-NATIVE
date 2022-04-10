import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      style={styles.container}
      placeholder="Search"
      onChangeText={onChangeSearch}
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
