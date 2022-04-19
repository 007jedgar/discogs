import * as React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Search,
  Listing
} from '../scenes'

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+20 : 0
  }
})

function AppStack() {
  return (
    <SafeAreaView style={[{flex: 1}, styles.AndroidSafeArea]}>
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