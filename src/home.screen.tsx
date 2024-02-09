import React, {useCallback} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {ListItem, LISTS} from '../listItem';
import StepView from './components/StepView';

export const HomeScreen = () => {
  const renderItem = useCallback(
    (
      value: ListItem,
      index: number,
      shouldHideFirst: boolean,
      shouldHideLast: boolean,
    ) => {
      return (
        <StepView
          hideTopConnector={index === 0 ? shouldHideFirst : false}
          hideBottomConnector={
            index === LISTS.length - 1 ? shouldHideLast : false
          }
          connectorWidth={0.5}
          //   stepItem={<View style={styles.circle} />}
        >
          <View style={styles.card}>
            <Text>
              {value?.title} and {value?.title}
            </Text>
          </View>
        </StepView>
      );
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <StepView
            connectorWidth={0.5}
            hideBottomConnector={true}
            hideTopConnector={true}>
            <View style={styles.header}>
              <Text>Some Header</Text>
            </View>
          </StepView>
          {LISTS.map((value, index) => renderItem(value, index, true, false))}
          <StepView connectorWidth={0.5}>
            <View style={styles.header}>
              <Text>Some Header</Text>
            </View>
          </StepView>
          {LISTS.map((value, index) => renderItem(value, index, false, true))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 6,
  },
  header: {
    padding: 16,
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    // margin: 4,
  },

  contentContainerStyle: {
    padding: 16,
  },
});
