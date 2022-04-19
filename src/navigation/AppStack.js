import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Search,
  Listing
} from '../scenes'

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }} options={{gestureEnabled: false,}}
        >
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Listing" component={Listing} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default AppStack