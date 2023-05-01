import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureDetector,
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const AnimatedEventExample = () => {
  const pressed = useSharedValue(false);
  const startingPosition = 0;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    // onActive: (event, ctx) => {
    //   x.value = startingPosition + event.translationX;
    //   y.value = startingPosition + event.translationY;
    // },
    // onEnd: (event, ctx) => {
    //   pressed.value = false;
    //   x.value = withSpring(startingPosition);
    //   y.value = withSpring(startingPosition);
    // },
  });

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [{scale: withSpring(pressed.value ? 1.2 : 1)}],
    };
  });
  const uas1 = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });
  return (
    <SafeAreaView style={styles.mainComponentStyle}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.ballStyle, uas]} />
      </PanGestureHandler>
    </SafeAreaView>
  );
};

export default AnimatedEventExample;

const styles = StyleSheet.create({
  mainComponentStyle: {
    flexGrow: 1,
    width: '96%',
    alignSelf: 'center',
  },
  ballStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#6495ED',
    marginTop: 100,
  },
});
