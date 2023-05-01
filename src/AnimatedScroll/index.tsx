import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const listView = [`Apple`, `Orange`, `Banana`, `Coconat`];

const AnimatedScrollExample = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <SafeAreaView style={styles.mainComponent}>
      <Animated.ScrollView
        style={styles.component}
        horizontal
        scrollEventThrottle={16}
        onScroll={scrollHandler}>
        {listView.map((ele: any, index: any) => {
          const subStyle = useAnimatedStyle(() => {
            const scale = interpolate(
              translateX.value,
              [(index - 1) * width, index * width, (index + 1) * width],
              [0, 1, 0],
              Extrapolate.CLAMP,
            );
            const radius = interpolate(
              translateX.value,
              [(index - 1) * width, index * width, (index + 1) * width],
              [0, height * 0.2, 0],
              Extrapolate.CLAMP,
            );
            return {
              borderRadius: radius,
              transform: [{scale}],
            };
          });

          return (
            <View
              key={index}
              style={[
                styles.viewStyle,
                {backgroundColor: `rgba(0,0,256,0.${index + 3})`},
              ]}>
              <Animated.View style={[styles.box, subStyle]} />
            </View>
          );
        })}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default AnimatedScrollExample;

const styles = StyleSheet.create({
  mainComponent: {
    flexGrow: 1,
  },
  component: {
    flexGrow: 1,
    backgroundColor: '#CF9AEC',
  },
  viewStyle: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: height * 0.3,
    width: height * 0.3,
    backgroundColor: '#912BC9',
  },
});
