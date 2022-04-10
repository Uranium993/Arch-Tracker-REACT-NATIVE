import * as React from "react";
import { List, Button } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ExpandBox from "../ExpandableBox/ExpandBox";

const Accordion = ({ setExpandContainer, singleProject }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => {
    setExpandContainer(!expanded);
    setExpanded(!expanded);
  };

  const { clientName, codename } = singleProject;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>{clientName}</Text>
        <Text style={{ fontSize: 18 }}>{codename}</Text>
      </View>
      {expanded ? <ExpandBox singleProject={singleProject} /> : null}
    </TouchableOpacity>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "70%",
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 3,
    justifyContent: "space-between",
  },
});

// <List.Accordion
//   title="292992"
//   theme={{ colors: { background: "white" } }}
//   left={() => <InitialInfoSection />}
//   expanded={expanded}
//   onPress={handlePress}
//   titleStyle={{ marginTop: 4, marginLeft: 30 }}
// >
//   <List.Item
//     style={{ marginTop: 15 }}
//     left={() => <LeftSide email={email} />}
//     right={() => <RightSide />}
//   />
//   <List.Item left={() => <EADbuttons />} />
// </List.Accordion>
