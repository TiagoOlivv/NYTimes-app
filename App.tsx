import 'react-native-gesture-handler';

import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { loadAsync } from 'expo-font';
import { Alert, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { AppProvider } from './src/hooks';

import { Routes } from './src/navigation';

import theme from './src/constants/styles/theme';

const fetchFonts = () => {
  return loadAsync({
    Roboto_Bold: require('./assets/fonts/Roboto-Bold.ttf'),
    Roboto_Medium: require('./assets/fonts/Roboto-Medium.ttf'),
    Roboto_Regular: require('./assets/fonts/Roboto-Regular.ttf'),
  });
};

const App: React.FC = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={error => Alert.alert(error.name, error.message)}
      />
    );
  }

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={theme.colors.primary}
            barStyle="dark-content"
            translucent
          />
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
