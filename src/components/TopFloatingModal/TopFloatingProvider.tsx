import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

type Props = PropsWithChildren<{}>;

export const TopFloatingProvider = (props: Props) => {
  const {children} = props;
  return <View>{children}</View>;
};
