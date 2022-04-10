import {
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
// Components
import SizedBox from "../components/SizedBox";
import { useForm, Controller } from "react-hook-form";
import useStyles from "./login.styles";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import EmailInput from "../components/LoginInputs/EmailInput";
import PasswordInput from "../components/LoginInputs/PasswordInput";
import ConfirmPasswordInput from "../components/LoginInputs/ConfirmPasswordInput";
import { useDispatch } from "react-redux";
import { addToken, getUserToken } from "../Redux/slices/authSlice";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const navigation = useNavigation();

  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();
  const [signup, setSignup] = useState(false);
  const [verificationModal, setVerificationModal] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // user.emailVerified
      if (user) {
        user.getIdToken().then((token) => {
          dispatch(addToken(token));
        });
        navigation.navigate("Dashboard");
      }
    });

    return unsubscribe;
  }, []);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const loginWithGoogle = () => {
    auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        dispatch(addToken(userCred.credential.idToken));
      });
  };

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      console.log("user returned from firebase (line 70, login)");
    } catch (err) {
      console.log(err.message);
    }

    // setSignup((prev) => !prev);
  });

  const onSubmitSignUp = (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      Alert("Passwords do not match");
    } else {
      dispatch(getUserToken(data));
      setVerificationModal(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.content}
          >
            <Text style={styles.title}>Welcome back!</Text>

            <SizedBox height={8} />

            <Text style={styles.subtitle}>Sign in to your account</Text>
            <Modal
              animationType="fade"
              visible={verificationModal}
              style={{ backgroundColor: "white" }}
              onRequestClose={() => setVerificationModal(false)}
            >
              <Text> VERIFICATION LINK IS SENT TO THE PROVIDED EMAIL </Text>
            </Modal>
            <SizedBox height={32} />

            <EmailInput
              control={control}
              Controller={Controller}
              emailInput={emailInput}
              onSubmit={onSubmit}
            />

            <SizedBox height={16} />

            <PasswordInput
              control={control}
              Controller={Controller}
              passwordInput={passwordInput}
              onSubmit={onSubmit}
            />

            <SizedBox height={16} />

            {signup ? (
              <ConfirmPasswordInput
                control={control}
                Controller={Controller}
                confirmPasswordInput={confirmPasswordInput}
                onSubmit={onSubmit}
              />
            ) : null}

            <SizedBox height={16} />

            <TouchableOpacity>
              <View style={styles.forgotPasswordContainer}>
                <Text style={styles.textButton}>Forgot password?</Text>
              </View>
            </TouchableOpacity>
            <SizedBox height={16} />

            {!signup ? (
              <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonTitle}>Login</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleSubmit(onSubmitSignUp)}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonTitle}>Continue</Text>
                </View>
              </TouchableOpacity>
            )}

            <SizedBox height={50} />
            <Text style={styles.textButton}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => setSignup((prev) => !prev)}>
              <View style={styles.buttonSignUp}>
                {signup ? (
                  <Text style={styles.buttonTitle}>Back to Login</Text>
                ) : (
                  <Text style={styles.buttonTitle}>Sign up</Text>
                )}
              </View>
            </TouchableOpacity>
            <SizedBox height={16} />

            <TouchableOpacity onPress={loginWithGoogle}>
              <View style={styles.buttonSignUp}>
                <Text style={styles.buttonTitle}>Login with Google</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
