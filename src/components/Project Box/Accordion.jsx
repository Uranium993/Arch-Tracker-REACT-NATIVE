import * as React from "react";
import { List, Button } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";

const Accordion = () => {
  const [expanded, setExpanded] = React.useState(true);
  const email = "vesna@gmail.com";
  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title="292992"
      theme={{ colors: { background: "white" } }}
      left={() => <InitialInfoSection />}
      expanded={expanded}
      onPress={handlePress}
      titleStyle={{ marginTop: 4 }}
    >
      <List.Item
        style={{ marginTop: 15 }}
        left={() => <LeftSide email={email} />}
        right={() => <RightSide />}
      />
      <List.Item left={() => <EADbuttons />} />
    </List.Accordion>
  );
};

export default Accordion;

const InitialInfoSection = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "50%",
        marginLeft: 2,
      }}
    >
      <Text style={{ fontSize: 18 }}>Djordje Radanovic</Text>
    </View>
  );
};

const LeftSide = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        width: "30%",
        height: 120,
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

const RightSide = () => {
  return (
    <View
      style={{
        marginRight: 20,
        flexDirection: "column",
        width: "50%",
        height: 120,
        justifyContent: "space-between",
      }}
    >
      <Text>djordjino@gmail.com</Text>
      <Text>051 2525 515</Text>
      <Text>30340</Text>
      <Text>34356</Text>
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
      }}
    >
      <Button
        icon="update"
        mode="outlined"
        onPress={() => console.log("Pressed")}
      >
        EDIT
      </Button>
      <Button
        icon="archive"
        mode="outlined"
        onPress={() => console.log("Pressed")}
      >
        ARCHIVE
      </Button>
      <Button
        icon="delete"
        color="#ff4d4f"
        mode="outlined"
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
