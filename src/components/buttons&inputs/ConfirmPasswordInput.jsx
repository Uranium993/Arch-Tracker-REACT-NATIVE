import { Pressable, View, Text, TextInput } from "react-native";
import useStyles from "../../screens/login.styles";

import React from "react";

const ConfirmPasswordInput = ({
  Controller,
  confirmPasswordInput,
  control,
  onSubmit,
}) => {
  const styles = useStyles();

  return (
    <Pressable onPress={() => confirmPasswordInput.current?.focus()}>
      <View style={styles.form}>
        <Text style={styles.label}>Confirm Password</Text>

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={onSubmit}
              ref={confirmPasswordInput}
              returnKeyType="done"
              secureTextEntry
              style={styles.textInput}
              textContentType="password"
              value={value}
            />
          )}
        />
      </View>
    </Pressable>
  );
};

export default ConfirmPasswordInput;
