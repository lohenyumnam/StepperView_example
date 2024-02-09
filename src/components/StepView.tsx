import React, {PropsWithChildren, useMemo} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

type Props = PropsWithChildren<{
  hideTopConnector?: boolean;
  hideBottomConnector?: boolean;

  disableTopConnector?: boolean;
  disableBottomConnector?: boolean;

  style?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  connectingLineColor?: string;
  stepItem?: React.ReactElement | string;
  connectorWidth?: number;
  connectorContainerWidth?: number;
  connectorMinHight?: number;
  gap?: number;
}>;

const StepView = (props: Props) => {
  const {
    children,
    hideTopConnector,
    hideBottomConnector,
    disableTopConnector = false,
    disableBottomConnector = false,
    style,
    connectingLineColor,
    connectorMinHight,
    stepItem,
    childrenContainerStyle,
    connectorWidth = 1,
    connectorContainerWidth = 20,
    gap = 16,
  } = props;
  const styles = useStyles();
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.row]}>
        <View
          style={[
            styles.stepContainer,
            connectorContainerWidth !== undefined && {
              width: connectorContainerWidth,
            },
          ]}>
          {!disableTopConnector && (
            <View
              style={[
                styles.connectingLine,
                connectorMinHight !== undefined && {
                  minHeight: connectorMinHight,
                },
                connectorWidth !== undefined && {
                  width: connectorWidth,
                },
                connectingLineColor !== undefined && {
                  backgroundColor: connectingLineColor,
                },
                hideTopConnector && styles.hiddenLine,
              ]}
            />
          )}
          {typeof stepItem === 'string' ? <Text>{stepItem}</Text> : stepItem}
          {!disableBottomConnector && (
            <View
              style={[
                styles.connectingLine,
                connectorMinHight !== undefined && {
                  minHeight: connectorMinHight,
                },
                connectorWidth !== undefined && {
                  width: connectorWidth,
                },
                connectingLineColor !== undefined && {
                  backgroundColor: connectingLineColor,
                },
                hideBottomConnector && styles.hiddenLine,
              ]}
            />
          )}
        </View>

        <View style={[{width: gap}]} />

        <View style={[styles.childrenContainer, childrenContainerStyle]}>
          {children}
        </View>
      </View>
    </View>
  );
};

export default StepView;

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {},
        row: {
          flexDirection: 'row',
        },
        stepContainer: {
          alignItems: 'center',
        },
        connectingLine: {
          flexGrow: 1,
          width: 1,
          backgroundColor: 'black',
          alignSelf: 'center',
          minHeight: 10,
        },
        hiddenLine: {
          backgroundColor: 'transparent',
        },

        childrenContainer: {
          flex: 1,
          //   backgroundColor: 'lightblue',
          marginVertical: 1,
        },
      }),

    [],
  );
};
