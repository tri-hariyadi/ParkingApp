import React from 'react';
import { LogBox } from 'react-native';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from "react-native-flash-message";
import Routes from './routes';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk
  ),
);

const MainApp = () => {
  LogBox.ignoreLogs(['Warning: Cannot update a component from inside the function body of a different component']);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
}

const App = () => {
  return (
    <StoreProvider store={store}>
      <MainApp />
    </StoreProvider>
  );
}

export default App

