import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

interface SignInSocialButtonsProps {}

const btns = [
  {
    name: 'Google',
    logoUrl: '',
  },
  {
    name: 'Apple',
    logoUrl: '',
  },
];

const SignInSocialButtons = ({}: SignInSocialButtonsProps) => {
  return (
    <>
      <View style={styles.container}>
        {btns.map(({name}) => (
          <TouchableOpacity key={name} style={styles.button}>
            <Text>Logo</Text>
            <Text> Sign in with </Text>
            <Text>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default SignInSocialButtons;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginTop: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
