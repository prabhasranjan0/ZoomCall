import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

export const HEADER_IMAGE_HEIGHT = Dimensions.get('window').width / 3;

export default function InterpolationExample() {
  const items = new Array(110).fill(0).map((_, index) => ({id: index}));

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y;
    },
  });
  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, 50], [1, 25], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    return {
      transform: [{scale: scale}],
    };
  });

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 20,
            left: 0,
            width: 20,
            height: 20,
            backgroundColor: 'blue',
          },
          animatedStyles,
        ]}
      />

      <Animated.ScrollView
        scrollEventThrottle={1}
        style={StyleSheet.absoluteFill}
        onScroll={scrollHandler}>
        {items.map(ele => (
          <Text key={ele.id}>{ele.id}</Text>
        ))}
      </Animated.ScrollView>
    </View>
  );
}
