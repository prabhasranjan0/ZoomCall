import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import ReactJSIcon from './asset/react.png';

const UseShareExample = () => {
  const randomNumber = useSharedValue(100);

  const style = useAnimatedStyle(() => {
    return {
      width: withSpring(randomNumber.value),
      height: withSpring(randomNumber.value, {stiffness: 10}),
    };
  });

  return (
    <SafeAreaView style={styles.mainComponent}>
      <TouchableOpacity
        onPress={() => {
          randomNumber.value = Math.random() * 350;
        }}>
        <Animated.Image
          source={ReactJSIcon}
          resizeMode={'contain'}
          style={style}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UseShareExample;

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#7CA1B4',
  },
});
