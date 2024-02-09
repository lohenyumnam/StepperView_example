import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import StepItemH from './StepItemH';

type Props<T> = {
  items: T[];
};

const HorizontalStepView = (props: Props<string>) => {
  const {items = []} = props;
  return (
    <View style={styles.row}>
      {items.map((value, index) => {
        return (
          <StepItemH
            hideLeftConnector={index === 0}
            hideRightConnector={index === items.length - 1}>
            <Text style={styles.title}>Visit Scheduled</Text>
          </StepItemH>
        );
      })}
    </View>
  );
};

export default HorizontalStepView;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    // flex: 1,
    // flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 12,
  },
});
