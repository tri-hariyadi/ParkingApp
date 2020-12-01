// import React from 'react';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { View, Text, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     // height: 400,
//     // width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         provider={PROVIDER_GOOGLE}
//         style={styles.map}
//         region={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.015,
//           longitudeDelta: 0.0121,
//         }}
//       >
//       </MapView>
//     </View>
//   )
// }

// export default App

import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './routes';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk
  ),
);

const MainApp = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
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

