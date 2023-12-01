import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SignInSocialButtons from './components/SignInSocialButtons';
import SignInManualInputs from './components/SignInManualInputs';
import SignInSignUpArea from './components/SignInSignUpArea';
import SignInFooter from './components/SingInFooter';

interface SignInScreenProps {}

const SignInScreen = ({}: SignInScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.alignCenter}>
          <Text style={styles.screenLabel}>Sign In</Text>
          <Text>Your Social Campaigns</Text>
        </View>
        <SignInSocialButtons />
        <SignInManualInputs />
        <SignInSignUpArea />
      </View>
      <SignInFooter />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    flex: 1,
  },
  mainContainer: {justifyContent: 'center', flex: 1},
  alignCenter: {alignItems: 'center'},
  screenLabel: {fontWeight: 'bold', fontSize: 26, marginBottom: 8},
  selfCenter: {alignSelf: 'center'},
});
