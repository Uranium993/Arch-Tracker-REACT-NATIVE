import { StyleSheet } from "react-native";

export const useStyles = () => {
  return StyleSheet.create({
    buttonLogin: {
      alignItems: "center",
      backgroundColor: "rgb(93, 95, 222)",
      borderRadius: 8,
      height: 48,
      justifyContent: "center",
    },
    buttonSignUp: {
      alignItems: "center",
      borderColor: "white",
      borderWidth: 2,
      borderColor: "rgb(93, 95, 222)",
      borderRadius: 8,
      height: 48,
      justifyContent: "center",
    },

    buttonTitle: {
      color: "#FFFFFF",
      fontSize: 17,
      fontWeight: "600",
      lineHeight: 22,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    forgotPasswordContainer: {
      alignItems: "flex-end",
    },
    form: {
      alignItems: "center",
      backgroundColor: "rgb(58, 58, 60)",
      borderRadius: 8,
      flexDirection: "row",
      height: 48,
      paddingHorizontal: 16,
    },
    label: {
      color: "#73d13d",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 20,
      width: 100,
    },
    root: {
      backgroundColor: "#000000",
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
    subtitle: {
      color: "rgba(235, 235, 245, 0.6)",
      fontSize: 17,
      fontWeight: "400",
      lineHeight: 22,
    },
    textButton: {
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 20,
    },
    textInput: {
      marginLeft: 5,
      color: "#FFFFFF",
      flex: 1,
      fontSize: 18,
    },
    title: {
      color: "#FFFFFF",
      fontSize: 28,
      fontWeight: "700",
      lineHeight: 34,
    },
  });
};

export const useExpandBoxStyles = () =>
  StyleSheet.create({
    buttonTitle: {
      color: "#FFFFFF",
      fontSize: 17,
      fontWeight: "600",
      lineHeight: 22,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 16,
      paddingVertical: 32,
    },

    form: {
      alignItems: "center",
      backgroundColor: "rgb(58, 58, 60)",
      borderRadius: 8,
      flexDirection: "row",
      height: 33,
      paddingHorizontal: 16,
    },
    label: {
      color: "#73d13d",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 20,
      //width: 100,
    },
    root: {
      backgroundColor: "#000000",
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
    subtitle: {
      color: "rgba(235, 235, 245, 0.6)",
      fontSize: 17,
      fontWeight: "400",
      lineHeight: 22,
    },
    textButton: {
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 20,
    },
    textInput: {
      marginLeft: 5,
      color: "#FFFFFF",
      flex: 1,
      fontSize: 18,
      width: "100%",
    },
    title: {
      color: "#FFFFFF",
      fontSize: 28,
      fontWeight: "700",
      lineHeight: 34,
    },
  });
