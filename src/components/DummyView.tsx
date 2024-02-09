import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DummyView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
      {/* <View style={styles.item} /> */}
    </View>
  );
};

export default DummyView;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'red',
    flexWrap: 'wrap',
    gap: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  item: {
    height: 50,
    backgroundColor: 'green',

    width: '45%',
    flexGrow: 2,
  },
});
