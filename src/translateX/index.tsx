import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const TranslateAnimated = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255),
        },
      ],
    };
  });

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 50,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  return (
    <SafeAreaView style={styles.mainComponentStyle}>
      <Text>TranslateAnimated</Text>
      <Animated.View style={[styles.boxStyle, animatedStyles]} />
      <Animated.View style={[styles.boxStyle, customSpringStyles]} />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => (offset.value = Math.random())}>
        <Text style={styles.buttonTextStyle}>Move</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TranslateAnimated;

const styles = StyleSheet.create({
  mainComponentStyle: {
    flexGrow: 1,
    width: '96%',
    alignSelf: 'center',
  },
  buttonStyle: {
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  buttonTextStyle: {
    fontSize: 25,
    textTransform: 'uppercase',
  },
  boxStyle: {
    backgroundColor: '#F08080',
    height: 50,
    width: 50,
    borderRadius: 5,
    marginTop: 50,
  },
});
