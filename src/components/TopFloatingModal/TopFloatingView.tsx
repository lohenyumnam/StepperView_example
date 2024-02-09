import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

export const TopFloatingView = (props: Props) => {
  const {} = props;
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>TopFloatingView</Text>
    </View>
  );
};

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {},
      }),
    [],
  );
};
