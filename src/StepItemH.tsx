import React, {PropsWithChildren, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

type Props = PropsWithChildren<{
  title?: string;
  status?: boolean;
  hideLeftConnector?: boolean;
  hideRightConnector?: boolean;
  maxWidth?: number;
}>;

const StepItemH = (props: Props) => {
  const {hideLeftConnector, hideRightConnector, children, maxWidth} = props;
  const styles = useStyles();
  return (
    <View style={[styles.container, {maxWidth}]}>
      <View style={styles.row}>
        <View
          style={[
            styles.connector,
            hideLeftConnector && styles.hiddenConnector,
          ]}
        />
        <View style={styles.circle} />
        <View
          style={[
            styles.connector,
            hideRightConnector && styles.hiddenConnector,
          ]}
        />
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default StepItemH;

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          //   backgroundColor: 'green',
        },
        row: {
          flexDirection: 'row',
        },
        circle: {
          width: 18,
          aspectRatio: 1,
          borderRadius: 9,
          backgroundColor: 'red',
        },
        connector: {
          height: 1,
          flexGrow: 1,
          minWidth: 10,
          backgroundColor: 'black',
          alignSelf: 'center',
        },

        hiddenConnector: {
          backgroundColor: 'transparent',
        },

        content: {
          //   //   flex: 1,
          //   height: 10,
          //   width: 100,
        },
      }),
    [],
  );
};
