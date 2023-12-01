import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface SignInForgotPasswordProps {}

const SignInForgotPassword = ({}: SignInForgotPasswordProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Forgot Password ?</Text>
    </TouchableOpacity>
  );
};

export default SignInForgotPassword;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  text: {
    color: 'blue',
  },
});
