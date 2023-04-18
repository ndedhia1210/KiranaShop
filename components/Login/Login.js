import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
        <Text 
          style={styles.appName} 
        >
          KiranaShop 
        </Text>
        <Image
          style={styles.logo}
          source={require('../../resources/AppLogo.png')}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.inputTextBox}
            mode='outlined'
            label="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.inputTextBox}
            mode='outlined'
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button 
            textColor={"#000"}
            buttonColor={'#FFBD14'}
            style={styles.loginButton}
            mode="contained" 
            onPress={authenticate}
          >
            Login
          </Button>
          <Button 
            textColor={"#000"}
            buttonColor={'#6397E3'}
            style={styles.signupButton}
            mode="contained" 
            onPress={() => console.log('Pressed')}
          >
            Request for new password
          </Button>
          <Text style={styles.note}>Note: Please contact shopkeeper for new password!</Text>
        </View>
    </View>
  );

  function authenticate() {
    setIsLoggedIn(true);
    // if(username === 'admin' && password === 'admin')
    //   setIsLoggedIn(true);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  appName: {
    marginTop: '8%',
    fontFamily: 'Inter-Black',
    fontSize: 50
  },
  logo: {
    margin: '5%',
    width: 150,
    height: 150,
  },
  form: {
    width: '80%',
    flex: 1,
    gap: '1vh'
  },
  loginButton: {
    borderRadius: 5,
    height: '48px',
    justifyContent: 'center'
  },
  signupButton: {
    borderRadius: 5,
    height: '48px',
    justifyContent: 'center',
  },
  inputTextBox: {
    backgroundColor: '#E3E1E1'
  },
  note: {
    alignSelf: 'center',
    fontSize: 15,
  }
});
