import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const ExpandBox = ({ singleProject }) => {
  return (
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <LeftSide />
        <RightSide singleProject={singleProject} />
      </View>
      <EADbuttons />
    </View>
  );
};

export default ExpandBox;

const LeftSide = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        width: "30%",
        height: 100,
        justifyContent: "space-between",
      }}
    >
      <Text>Email:</Text>
      <Text>Phone:</Text>
      <Text>Estimated:</Text>
      <Text>Final:</Text>
    </View>
  );
};

const RightSide = ({ singleProject }) => {
  const { clientMail, clientNumber, estimatedWorth, finalWorth } =
    singleProject;

  return (
    <View
      style={{
        marginRight: 20,
        flexDirection: "column",
        width: "50%",
        height: 100,
        justifyContent: "space-between",
      }}
    >
      <Text>{clientMail}</Text>
      <Text>{clientNumber}</Text>
      <Text>{estimatedWorth}</Text>
      <Text>{finalWorth}</Text>
    </View>
  );
};

//edit, archive, delete
const EADbuttons = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 15,
      }}
    >
      <Button
        icon="update"
        mode="outlined"
        compact={true}
        onPress={() => console.log("Pressed")}
      >
        EDIT
      </Button>
      <Button
        icon="archive"
        mode="outlined"
        compact={true}
        onPress={() => console.log("Pressed")}
      >
        ARCHIVE
      </Button>
      <Button
        icon="delete"
        color="#ff4d4f"
        mode="outlined"
        compact={true}
        onPress={() => console.log("Pressed")}
      >
        DELETE
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});
