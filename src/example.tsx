import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import HorizontalStepView from './HorizontalStepView';

export const Example = () => {
  return (
    <View style={styles.container}>
      <HorizontalStepView items={list} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

const list = [
  'Visit Scheduled',
  'Visit Scheduled',
  'Visit Scheduled',
  'Visit Scheduled',
  'Visit Scheduled',
];
