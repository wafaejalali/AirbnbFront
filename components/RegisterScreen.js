// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function RegisterScreen({ navigation }) {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = () => {
      // Implement your sign-up logic here
      // You can use a state management library or API calls to register the user
      // For now, let's just navigate back to the login screen
      navigation.goBack();
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Sign Up</Text>
        <TextInput
          placeholder="nom"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      
         <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
          <TextInput
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TextInput
          placeholder="numero de telefone"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
         <TextInput
          placeholder="adress"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        
        <Button title="Sign Up" onPress={handleSignUp} color="black"/>
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
  });
export default RegisterScreen;
