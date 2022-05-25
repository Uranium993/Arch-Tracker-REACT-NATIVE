//import { StatusBar } from "expo-status-bar";

import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { AppRegistry, LogBox } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";
import { auth } from "./firebase";
import { useNavigation } from "@react-navigation/native";
import {} from "@react-navigation/native";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { projectList } from "./src/Redux/rtkQuery/api";

//WebBrowser.maybeCompleteAuthSession();

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

function AppWrapper() {
  //const { userName } = useSelector((state) => state.authReducer);

  //const dispatch = useDispatch()

  // const signOut = () => {
  //   dispatch()
  // };

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerRight: () => (
          <Button color="" onPress={handleSignOut}>
            sign out
            {/* <Text style={styles.buttonText}>Sign out</Text> */}
          </Button>
        ),
      })}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerLeft: () => (
            <Button icon="menu" mode="outlined" compact={true} />
          ),

          title: `Welcome`,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  AppRegistry.registerComponent("expo-arch-tracker", () => App);

  return (
    <ApiProvider api={projectList}>
      <Provider store={store}>
        <NavigationContainer>
          <PaperProvider>
            <AppWrapper />
          </PaperProvider>
        </NavigationContainer>
      </Provider>
    </ApiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    //    position: "absolute",
    backgroundColor: "#0782F9",
    width: "50%",
    right: Platform.OS === "ios" ? -60 : -50,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});

// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import ListScreen from "./src/screens/ListScreen";
//
// const navigator = createStackNavigator(
// {
// Home: Login,
// List: ListScreen,
// },
// {
// initialRouteName: "Home",
// defaultNavigationOptions: {
// title: "App",
// },
// }
// );
//
// export default createAppContainer(navigator);
//
