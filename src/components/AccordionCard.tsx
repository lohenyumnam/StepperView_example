import React, {PropsWithChildren, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = PropsWithChildren<{
  title?: string;
  showExpandByDefault?: boolean;
}>;

const AccordionCard = (props: Props) => {
  const {title, showExpandByDefault = false, children} = props;
  const [shouldExpand, setShouldExpand] = useState(showExpandByDefault);
  return (
    <Pressable
      onPress={() => setShouldExpand(val => !val)}
      style={styles.container}>
      <View>
        <Text>{title}</Text>
        {shouldExpand && children}
      </View>
    </Pressable>
  );
};

export default AccordionCard;

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
});
