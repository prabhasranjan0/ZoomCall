import * as React from 'react';
import Wrapper from './src/appConfig/wrapper';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Wrapper />
    </NavigationContainer>
  );
};

export default App;
