import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-paper";
import { projectList } from "../../Redux/rtkQuery/api";
import SizedBox from "../SizedBox";
import FormInput from "./FormInput";
import { auth } from "../../../firebase";
import { useSelector } from "react-redux";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const AddProjectModalForm = (props) => {
  const clientNameInput = useRef();
  const codeNameInput = useRef();
  const emailInput = useRef();
  const clientNumberInput = useRef();
  const estimatedWorthInput = useRef();
  const finalWorthInput = useRef();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      clientName: "",
      codename: "",
      clientMail: "",
      clientNumber: "",
      estimatedWorth: null,
      finalWorth: null,
    },
  });

  const { testToken } = useSelector((state) => state.authReducer);

  const [addProjectInfo] = projectList.useAddProjectInfoMutation();

  const onSubmit = handleSubmit(async (data) => {
    data.token = testToken;

    await addProjectInfo(data);
    console.log("pressed");
  });
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <SafeAreaView
        style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 1.7 }]}
      >
        <ScrollView>
          <View style={styles.scrollView}>
            <Text style={styles.text}>Add Your Project </Text>
            <FormInput
              uniqueNameProp="clientName"
              control={control}
              Controller={Controller}
              refInput={clientNameInput}
              onSubmit={onSubmit}
              text="client name*:"
              keyboardTypeProp="default"
            />

            <SizedBox height={4} />

            <FormInput
              uniqueNameProp="codename"
              control={control}
              Controller={Controller}
              refInput={codeNameInput}
              onSubmit={onSubmit}
              text="codename*:"
              keyboardTypeProp="numeric"
            />
            <SizedBox height={4} />
            <FormInput
              control={control}
              Controller={Controller}
              refInput={emailInput}
              onSubmit={onSubmit}
              text="client email:"
              keyboardTypeProp="email-address"
            />
            <SizedBox height={4} />

            <FormInput
              uniqueNameProp="clientNumber"
              control={control}
              Controller={Controller}
              refInput={clientNumberInput}
              onSubmit={onSubmit}
              text="client number"
              keyboardTypeProp="numeric"
            />
            <SizedBox height={4} />

            <FormInput
              uniqueNameProp="estimatedWorth"
              control={control}
              Controller={Controller}
              refInput={estimatedWorthInput}
              onSubmit={onSubmit}
              text="estimated worth"
              keyboardTypeProp="numeric"
            />
            <SizedBox height={4} />

            <FormInput
              uniqueNameProp="finalWorth"
              control={control}
              Controller={Controller}
              refInput={finalWorthInput}
              onSubmit={onSubmit}
              text="final worth"
              keyboardTypeProp="numeric"
            />
          </View>
        </ScrollView>
        <Button
          mode="outlined"
          color="#ff4d4f"
          onPress={handleSubmit(onSubmit)}
          style={styles.submitBtn}
        >
          <Text style={styles.buttonTitle}>Submit</Text>
        </Button>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default AddProjectModalForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#bfbfbf",
    borderRadius: 10,
  },
  scrollView: {
    marginTop: 20,
    margin: 10,
  },
  option: {
    alignItems: "flex-start",
  },
  text: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  submitBtn: {
    width: "60%",
    padding: 5,
    alignSelf: "center",
    marginBottom: 7,
    borderWidth: 2,
    borderColor: "#ff4d4f",
  },
});
