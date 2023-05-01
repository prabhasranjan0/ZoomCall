import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  SlideInRight,
  SlideOutRight,
  SlideOutLeft,
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from 'react-native-reanimated';

const Task = ({value}: any) => {
  return (
    <Animated.View
      //   entering={SlideInRight}
      //   exiting={SlideOutLeft}
      //   layout={Layout.springify()}

      entering={LightSpeedInLeft}
      exiting={LightSpeedOutRight}
      layout={Layout.springify()}
      style={styles.participantView}>
      <Text>{value}</Text>
    </Animated.View>
  );
};

export default Task;

const styles = StyleSheet.create({
  mainComponent: {
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#1D8CEB',
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  participantView: {
    borderBottomColor: 'black',
    width: '100%',
    borderBottomWidth: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fffbeb',
  },
});
