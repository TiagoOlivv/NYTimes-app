import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

import { NewsProps } from '../models/News';

const { Navigator, Screen } = createStackNavigator();

export const Routes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
      initialRouteName="Home"
    >
      <Screen name="Details" component={Details} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
