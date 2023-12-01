import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface SignInSignUpAreaProps {}

const SignInSignUpArea = ({}: SignInSignUpAreaProps) => {
  return (
    <View style={styles.container}>
      <Text>Not a Member yet? </Text>
      <TouchableOpacity>
        <Text style={styles.signUpTxt}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInSignUpArea;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 16,
  },
  signUpTxt: {
    color: 'blue',
  },
});
