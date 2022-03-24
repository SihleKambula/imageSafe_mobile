import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import App from './App';
import {store} from './redux/app/store';

export default function () {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
}
