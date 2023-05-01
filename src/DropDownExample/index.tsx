import {
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Alert,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const threshold = width * 0.3;

const DropDownExample = () => {
  const [buttonName, setButtonName] = useState('slide to right');
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const slideX = useSharedValue(0);
  const dynamicStyle = useSharedValue({
    backColor: '#C92BA0',
  });

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withSpring(x.value)},
        {translateY: withSpring(y.value)},
      ],
    };
  });

  const onHandleClick = () => {
    x.value = 200;
    y.value = 200;
  };
  const onHandleClickReset = () => {
    x.value = 0;
    y.value = 0;
  };

  const panGestureEvent = useAnimatedGestureHandler({
    onStart(event, context: any) {
      context.translateX = x.value;
      context.translateY = y.value;
    },
    onActive(event, context) {
      x.value = event.translationX + context.translateX;
      y.value = event.translationY + context.translateY;
    },
    onEnd(event, context) {
      x.value = withSpring(x.value);
      y.value = withSpring(y.value);
    },
  });

  const panGestureSwipe = useAnimatedGestureHandler({
    onActive(event, context) {
      slideX.value = event.translationX;
    },
    onEnd(event, context) {
      if (threshold < event.translationX && buttonName === 'slide to right') {
        dynamicStyle.value = {backColor: '#446A46'};
        slideX.value = withSpring(width - 160 - width * 0.05);
        runOnJS(onRight)('slide to left');
        console.log('if ===>', threshold, event.translationX);
      } else if (
        buttonName === 'slide to left' &&
        threshold > event.translationX
      ) {
        console.log('else ===>', width * 0.6, threshold, event.translationX);
        slideX.value = withSpring(0);
        dynamicStyle.value = {backColor: '#C92BA0'};
        runOnJS(onLeftSwipe)('slide to right');
      } else {
        slideX.value = withSpring(0);
        dynamicStyle.value = {backColor: '#C92BA0'};
        runOnJS(onLeftSwipe)('slide to right');
      }
    },
  });
  function onRight(value: string) {
    setButtonName(value);
  }

  function onLeftSwipe(value: string) {
    setButtonName(value);
  }
  const swipeButtonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: dynamicStyle.value.backColor,
      transform: [{translateX: withSpring(slideX.value)}],
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.main}>
        <Text>DropDownExample</Text>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.basicBoxStyle, boxStyle]} />
        </PanGestureHandler>

        <TouchableOpacity onPress={onHandleClick}>
          <Text>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHandleClickReset}>
          <Text>Reset</Text>
        </TouchableOpacity>

        <View style={styles.boxStyle}>
          <PanGestureHandler onGestureEvent={panGestureSwipe}>
            <Animated.View style={[styles.boxButtomStyle, swipeButtonStyle]}>
              <Text style={styles.slideText}>{buttonName}</Text>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default DropDownExample;

const styles = StyleSheet.create({
  main: {flexGrow: 1},
  basicBoxStyle: {
    height: 70,
    width: 70,
    borderRadius: 10,
    backgroundColor: '#C92BA0',
  },
  boxStyle: {
    height: 60,
    width: '95%',
    borderWidth: 3,
    position: 'absolute',
    bottom: 50,
    borderColor: '#C92BA0',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  boxButtomStyle: {
    height: 50,
    width: 150,
    borderRadius: 5,
    backgroundColor: '#C92BA0',
    marginLeft: 2,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideText: {
    color: 'white',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
