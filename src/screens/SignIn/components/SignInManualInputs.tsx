import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import SignInForgotPassword from './SignInForgotPassword';
import {useDispatch, useSelector} from 'react-redux';
import {updateLoginStatus} from '../../../store/slices/signInSlice';
import {RootState} from '../../../store';

interface SignInManualInputsProps {}

const inputs: TextInputProps[] = [
  {
    placeholder: 'Email',
  },
  {
    placeholder: 'Password',
  },
];

const SignInManualInputs = ({}: SignInManualInputsProps) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.signIn.isLogin);

  const onSignInPress = () => {
    dispatch(updateLoginStatus(!isLogin));
  };

  return (
    <>
      <View>
        <Text style={styles.selfCenter}>Or with email</Text>
      </View>
      <View style={styles.container}>
        {inputs.map(inputProps => (
          <TextInput
            key={inputProps.placeholder}
            style={styles.input}
            {...inputProps}
          />
        ))}
        <SignInForgotPassword />
        <TouchableOpacity onPress={onSignInPress} style={styles.signInBtn}>
          <Text style={styles.signInTxt}>{isLogin ? 'Signed' : 'Sign In'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignInManualInputs;

const styles = StyleSheet.create({
  container: {},
  signInBtn: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 4,
  },
  signInTxt: {
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 6,
    marginBottom: 12,
  },
  selfCenter: {
    alignSelf: 'center',
    marginVertical: 32,
  },
});
