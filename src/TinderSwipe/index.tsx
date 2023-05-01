import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  concat,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

const TinderSwipe = () => {
  const item = new Array(1).fill(0).map((_, index) => ({id: index}));
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const penGesture = useAnimatedGestureHandler({
    onActive: e => {
      x.value = e.translationX;
      y.value = e.translationY;
    },
    onEnd: e => {
      x.value = withTiming(0);
      x.value = withTiming(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <SafeAreaView style={styles.main}>
      <Text>index</Text>
      {item.map((_, index) => (
        <PanGestureHandler onGestureEvent={penGesture}>
          <Animated.View key={index} style={[styles.subBox, animatedStyle]} />
        </PanGestureHandler>
      ))}
    </SafeAreaView>
  );
};

export default TinderSwipe;

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  subBox: {
    height: width + 100,
    width: width - 60,
    backgroundColor: '#446A46',
    borderRadius: 15,
    marginTop: 100,
  },
});
