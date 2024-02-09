import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const ProgressView = () => {
  const [showView, setShowView] = useState(false);
  const viewRef = useRef<View>(null);

  const onPress = useCallback(() => setShowView(v => !v), []);
  useEffect(() => {
    if (viewRef.current) {
      viewRef.current.measure((x, y, width, height, pageX, pageY) => {
        console.log('X:', pageX);
        console.log('Y:', pageY);
        console.log('Width:', width);
        console.log('Height:', height);
      });
    }
  }, []);
  return (
    <View style={styles.container}>
      <View ref={viewRef} style={styles.progress}>
        <Pressable onPress={onPress}>
          <Text>ProgressView</Text>
        </Pressable>
      </View>

      {showView && (
        <View style={styles.expandedCardContainer}>
          <View style={styles.expandedCard}>
            <ScrollView
              style={{maxHeight: Dimensions.get('window').height * 0.75}}>
              <View style={styles.content} />
              <View style={styles.content} />
              <View style={styles.content} />
              <View style={styles.content} />
              <View style={styles.content} />
              <View style={styles.content} />
              <View style={styles.content} />
              <View style={styles.content} />
              <View style={styles.content} />
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProgressView;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,

    left: 0,
    right: 0,

    ...Platform.select({
      android: {},
      ios: {
        zIndex: 9999,
      },
    }),
  },

  progress: {
    padding: 16,
    backgroundColor: 'lightyellow',
  },
  expandedCardContainer: {
    flex: 1,
    // backgroundColor: 'yellow',
    // height: 900,
  },
  expandedCard: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      android: {elevation: 999},
      ios: {
        zIndex: 9999,
      },
    }),
    // flex: 1,
  },
  content: {
    flex: 1,
    height: 100,
    backgroundColor: 'lightblue',
    marginBottom: 10,
  },
});
