import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface SignInFooterProps {}

const rightItems = ['Terms', 'Plans', 'Contact Us'];

const SignInFooter = ({}: SignInFooterProps) => {
  return (
    <View style={styles.container}>
      <Text>Translation</Text>
      <View style={styles.row}>
        {rightItems.map(item => (
          <TouchableOpacity key={item}>
            <Text style={styles.rightItemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SignInFooter;

const styles = StyleSheet.create({
  container: {
    marginBottom: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  row: {flexDirection: 'row'},
  rightItemText: {color: 'blue', marginLeft: 12},
});
