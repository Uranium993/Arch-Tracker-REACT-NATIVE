import { Pressable, View, Text, TextInput } from "react-native";
import useStyles from "../../screens/login.styles";

import React from "react";

const PasswordInput = ({ Controller, passwordInput, control, onSubmit }) => {
  const styles = useStyles();

  return (
    <Pressable onPress={() => passwordInput.current?.focus()}>
      <View style={styles.form}>
        <Text style={styles.label}>Password</Text>

        <Controller
          control={control}
          name="password"
          render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={onSubmit}
              ref={passwordInput}
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

export default PasswordInput;
