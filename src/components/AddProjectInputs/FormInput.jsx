import { Pressable, View, Text, TextInput } from "react-native";
import { useStyles, useExpandBoxStyles } from "../../screens/login.styles";
import React from "react";

const FormInput = ({
  expandBox,
  text,
  Controller,
  refInput,
  control,
  onSubmit,
  keyboardTypeProp,
  textContentTypeProp,
  uniqueNameProp,
}) => {
  const styles = expandBox ? useExpandBoxStyles() : useStyles();

  return (
    <Pressable onPress={() => refInput.current?.focus()}>
      <View style={styles.form}>
        <Text style={styles.label}>{text}</Text>

        <Controller
          control={control}
          name={uniqueNameProp}
          render={({ field: { onBlur, onChange, ref } }) => (
            <TextInput
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType={keyboardTypeProp}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={onSubmit}
              ref={ref}
              returnKeyType="next"
              style={styles.textInput}
              textContentType={textContentTypeProp}
            />
          )}
        />
      </View>
    </Pressable>
  );
};

export default FormInput;
