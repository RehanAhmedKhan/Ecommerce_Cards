import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
const WrapperSafeAreaView = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f7',
  },
  viewContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    margin: 12,
  },
});

export default WrapperSafeAreaView;
