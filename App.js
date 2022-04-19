import { StyleSheet } from 'react-native';
import AppStack from './src/navigation/AppStack'

export default function App() {
  return (
    <AppStack />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
