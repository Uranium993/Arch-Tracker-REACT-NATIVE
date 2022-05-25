import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import {
  useDeleteProjectMutation,
  useArchiveProjectMutation,
  useEditProjectInfoMutation,
} from "../../Redux/rtkQuery/api";
import FormInput from "../AddProjectInputs/FormInput";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";

const ExpandBox = ({ singleProject }) => {
  const [enableInput, setEnableInput] = useState(false);

  const [editProjectInfo] = useEditProjectInfoMutation();

  const { testToken } = useSelector((state) => state.authReducer);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      clientMail: "",
      clientNumber: "",
      estimatedWorth: null,
      finalWorth: null,
    },
  });
  const { _id } = singleProject;
  const onSubmit = handleSubmit(async (data) => {
    data.id = _id;
    data.token = testToken;
    await editProjectInfo(data);
    setEnableInput(false);
  });

  return (
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <LeftSide />
        <RightSide
          enableInput={enableInput}
          setEnableInput={setEnableInput}
          control={control}
          onSubmit={onSubmit}
          singleProject={singleProject}
        />
      </View>
      <EADbuttons
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        id={singleProject._id}
      />
    </View>
  );
};

export default ExpandBox;

const LeftSide = () => {
  return (
    <View style={styles.leftSide}>
      <Text>Email:</Text>
      <Text>Phone:</Text>
      <Text>Estimated:</Text>
      <Text>Final:</Text>
    </View>
  );
};

const RightSide = ({
  enableInput,
  setEnableInput,
  onSubmit,
  control,
  singleProject,
}) => {
  const { clientMail, clientNumber, estimatedWorth, finalWorth } =
    singleProject;

  let refs = useRef([...new Array(4)].map(() => createRef()));

  const emailInput = useRef();
  const clientNumberInput = useRef();
  const estimatedWorthInput = useRef();
  const finalWorthInput = useRef();

  const newClientInfoArr = [
    { type: "clientMail", info: clientMail, ref: emailInput },
    { type: "clientNumber", info: clientNumber, ref: clientNumberInput },
    { type: "estimatedWorth", info: estimatedWorth, ref: estimatedWorthInput },
    { type: "finalWorth", info: finalWorth, ref: finalWorthInput },
  ];

  return (
    <View style={styles.rightSide}>
      {newClientInfoArr.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setEnableInput(true)}
            style={styles.touchableOpacity}
          >
            {enableInput ? (
              <View>
                <FormInput
                  expandBox={true}
                  uniqueNameProp={item.type}
                  control={control}
                  Controller={Controller}
                  refInput={refs.current[index] && refs.current[index]}
                  onSubmit={onSubmit}
                  //text={item.info}
                  keyboardTypeProp="default"
                  key={index}
                />
              </View>
            ) : (
              <Text key={index} style={styles.text}>
                {item.info}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

//edit, archive, delete
const EADbuttons = ({ onSubmit, handleSubmit, id }) => {
  const [deleteProject] = useDeleteProjectMutation();
  const [archiveProject] = useArchiveProjectMutation();
  const { testToken } = useSelector((state) => state.authReducer);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 20,
      }}
    >
      <Button
        icon="update"
        mode="outlined"
        compact={true}
        onPress={handleSubmit(onSubmit)}
      >
        SUBMIT
      </Button>
      <Button
        icon="archive"
        mode="outlined"
        compact={true}
        onPress={() => archiveProject({ token: testToken, id })}
      >
        ARCHIVE
      </Button>
      <Button
        icon="delete"
        color="#ff4d4f"
        mode="outlined"
        compact={true}
        onPress={() => deleteProject({ token: testToken, id })}
      >
        DELETE
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  leftSide: {
    marginTop: 10,
    flexDirection: "column",
    width: "30%",
    height: 140,
    justifyContent: "space-between",
  },
  rightSide: {
    marginTop: 10,

    marginRight: 20,
    flexDirection: "column",
    width: "50%",
    height: 140,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    marginTop: 7,
    textAlign: "center",
  },
  touchableOpacity: {
    height: 30,
    width: "120%",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
});
