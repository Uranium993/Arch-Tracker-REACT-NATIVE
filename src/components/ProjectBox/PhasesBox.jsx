import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import PhaseMenu from "../ExpandableBox/PhaseMenu";

const PhasesBox = ({ singleProject }) => {
  const localDataArr = ["IDR", "IDP", "PGD", "PZI", "PIO"];

  const [reRender, setRerender] = useState(false);

  return (
    <View style={style.container}>
      {localDataArr.map((item, index) => (
        <PhaseMenu
          setRerender={setRerender}
          singleProject={singleProject}
          name={item}
          // sa setRerender u PhaseMenu promijenim reRender state, pa se apdejtuju
          // jer se key promijeni
          key={item + reRender}
          arrPosition={index}
        />
      ))}

      {/* <PhaseMenu name="IDR" arrPosition={0} /> */}
      {/* <PhaseMenu name="IDP" arrPosition={1} /> */}
      {/* <PhaseMenu name="PGD" arrPosition={2} /> */}
      {/* <PhaseMenu name="PZI" arrPosition={3} /> */}
      {/* <PhaseMenu name="PIO" arrPosition={4} /> */}
    </View>
  );
};

export default PhasesBox;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: 50,
  },
});
