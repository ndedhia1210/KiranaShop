import { StyleSheet, View } from 'react-native';
import Login from './components/Login/Login';
import Workspace from './components/Workspace/Workspace';
import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      { !isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Workspace /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },
});
