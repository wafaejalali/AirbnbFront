// DetailsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} title="Login" onPress={handleLogin} >
      <Text style={styles.buttonText}>Login</Text></TouchableOpacity>
      <TouchableOpacity
      
      style={styles.button}
      title="sign up"
      onPress={() => navigation.navigate('Register')} >
         <Text style={styles.buttonText}>sign up</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width:'20%',
    marginBottom:'5%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
   
 
export default LoginScreen;
