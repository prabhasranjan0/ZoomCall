import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UseShareExample from '../../useShareExample';
import AnimatedEventEx from '../../AnimatedEventEx';
import ListOfComponent from '../../ListOfComponent';
import DropDownExample from '../../DropDownExample';
import AnimatedListExample from '../../AnimatedExample';
import AnimatedLayoutExample from '../../AnimatedLayoutExample';
import AnimatedScrollExample from '../../AnimatedScroll';
import TranslateAnimated from '../../translateX';
import ListDivComponent from '../../ListDivComponent';
import TinderSwipe from '../../TinderSwipe';
import InterpolationExample from '../../InterpolationExample';
const Stack = createNativeStackNavigator();

const Wrapper = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="interpolationExample"
        component={InterpolationExample}
      />
      <Stack.Screen name="listOfComponent" component={ListOfComponent} />
      <Stack.Screen name="tinderSwipe" component={TinderSwipe} />
      <Stack.Screen name="listDivComponent" component={ListDivComponent} />
      <Stack.Screen name="useShareExample" component={UseShareExample} />
      <Stack.Screen name="animatedEventEx" component={AnimatedEventEx} />
      <Stack.Screen name="animatedExample" component={AnimatedListExample} />
      <Stack.Screen
        name="animatedLayoutExample"
        component={AnimatedLayoutExample}
      />
      <Stack.Screen name="animatedScroll" component={AnimatedScrollExample} />
      <Stack.Screen name="dropDownExample" component={DropDownExample} />
      <Stack.Screen name="translateX" component={TranslateAnimated} />
    </Stack.Navigator>
  );
};
export default Wrapper;
