import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import Main from './Main';
import reducers from './reducers';

const Stack = createStackNavigator();

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="OFE" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
