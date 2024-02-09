/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Example} from './src/example';

function App(): JSX.Element {
  return (
    <>
      {/* <HomeAccordionScreen /> */}
      {/* <HomeScreen /> */}
      <SafeAreaView>
        <Example />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
