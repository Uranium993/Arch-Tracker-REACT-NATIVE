import { Pressable, View, Text, TextInput } from "react-native";
import { useStyles } from "../../screens/login.styles";

import React from "react";

const EmailInput = ({ Controller, emailInput, control, onSubmit }) => {
  const styles = useStyles();

  return (
    <Pressable onPress={() => emailInput.current?.focus()}>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
              autoCapitalize="none"
              autoCompleteType="email"
              r
              autoCorrect={false}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={onSubmit}
              ref={emailInput}
              returnKeyType="next"
              style={styles.textInput}
              textContentType="username"
              value={value}
            />
          )}
        />
      </View>
    </Pressable>
  );
};

export default EmailInput;
