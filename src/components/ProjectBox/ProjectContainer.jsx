import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import PhasesBox from "./PhasesBox";
import Accordion from "./Accordion";
import { useGetSingleProjectQuery } from "../../Redux/rtkQuery/api";
import { Button } from "react-native-paper";

const ProjectContainer = ({ setTestRender, singleProject }) => {
  const [expandContainer, setExpandContainer] = useState(false);
  const [localData, setLocalData] = useState();

  const { data, isSuccess } = useGetSingleProjectQuery(singleProject._id);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  return (
    <View>
      {isSuccess && localData ? (
        <View
          style={[
            styles.container,
            styles.shadowProp,
            styles.elevation,
            {
              height: expandContainer ? 310 : 85,
            },
          ]}
        >
          <Accordion
            singleProject={localData[0]}
            setExpandContainer={setExpandContainer}
          />
          {/* ----------------------- Voj su ti nest-ovane one faze/boje sto se mijenjaju ------------------------ */}
          <PhasesBox singleProject={localData[0]} />
        </View>
      ) : null}
    </View>
  );
};

export default ProjectContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "column",
    margin: 7,
    backgroundColor: "white",
    width: "96%",
    borderRadius: 10,
    justifyContent: "flex-start",
  },

  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 6,
    shadowColor: "#52006A",
  },
});
