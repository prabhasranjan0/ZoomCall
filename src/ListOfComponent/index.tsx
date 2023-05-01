import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {componentList} from '../appConfig/util/constant';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import NaviagateView from './naviagateView';

const ListOfComponent = ({navigation}: any) => {
  const x = useSharedValue(0);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.mainComponent}>
        <Animated.ScrollView style={styles.scrollStyle}>
          {componentList.map((ele, index) => {
            return (
              <NaviagateView key={index} navigation={navigation} values={ele} />
            );
          })}
        </Animated.ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default ListOfComponent;

const styles = StyleSheet.create({
  mainComponent: {
    flexGrow: 1,
    backgroundColor: '#BE5A83',
  },
  textStyle: {
    fontSize: 25,
    textTransform: 'uppercase',
    color: 'white',
  },
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
  scrollStyle: {
    flexGrow: 1,
  },
});
