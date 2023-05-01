import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');
const threshold = -width * 0.3;

const NaviagateView = ({navigation, values}: any) => {
  const x = useSharedValue(0);

  const penGestureEvent = useAnimatedGestureHandler({
    onActive(event, context) {
      x.value = event.translationX;
    },
    onEnd(event, context) {
      if (threshold < event.translationX) {
        x.value = withTiming(0);
        runOnJS(otherWorklet)();
      } else {
        x.value = withTiming(0);
      }
    },
  });

  function otherWorklet() {
    navigation.navigate(values.screenName);
  }
  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(x.value)}],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={penGestureEvent}>
      <Animated.View style={[styles.boxStyle, boxStyle]}>
        <Text style={styles.textStyle}>{values.componentName}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default NaviagateView;

const styles = StyleSheet.create({
  boxStyle: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  textStyle: {
    fontSize: 25,
    textTransform: 'uppercase',
    color: 'white',
  },
});

/* 
<Animated.View key={index}>
                <PanGestureHandler onGestureEvent={panGestureEvent}>
                  <TouchableOpacity
                    style={[styles.boxStyle, boxStyle]}
                    onPress={() => navigateComponent(ele.screenName)}>
                    <Text style={styles.textStyle}>{ele.componentName}</Text>
                  </TouchableOpacity>
                </PanGestureHandler>
              </Animated.View>
               */
