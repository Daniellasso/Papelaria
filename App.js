import { StyleSheet, StatusBar, View } from 'react-native';
import Home from './src/pages/Home/Home';


export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar style={{backgroundColor: '#000'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3BEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
