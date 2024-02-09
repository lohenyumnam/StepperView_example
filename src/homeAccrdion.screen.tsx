import React, {useCallback} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {ListItem, LISTS} from '../listItem';
import AccordionCard from './components/AccordionCard';
import ProgressView from './components/ProgressView';
import StepView from './components/StepView';

export const HomeAccordionScreen = () => {
  const renderItem = useCallback(
    (
      value: ListItem,
      index: number,
      shouldHideFirst: boolean,
      shouldHideLast: boolean,
    ) => {
      return (
        <StepView
          key={index + JSON.stringify(value)}
          hideTopConnector={index === 0 ? shouldHideFirst : false}
          hideBottomConnector={
            index === LISTS.length - 1 ? shouldHideLast : false
          }
          connectorWidth={0.5}
          connectorMinHight={25}
          disableTopConnector={true}
          stepItem={<View style={styles.circle} />}>
          <AccordionCard title={value?.title}>
            <View style={styles.card}>
              <Text>
                {value?.title} and {value?.title}
              </Text>
            </View>
          </AccordionCard>
          <View style={styles.divider} />
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

          {LISTS.map((value, index) => renderItem(value, index, false, true))}
        </ScrollView>
      </View>
      <ProgressView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
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

  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 16,
  },
});
