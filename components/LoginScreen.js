// DetailsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button, StyleSheet,TouchableOpacity } from 'react-native';


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailerror, setEmailerror] = useState('');
  const [passworderror, setPassworderror] = useState('');
  const handleLogin = async () => {
   
    try { const response = await fetch('http://127.0.0.1:8000/api/adminLogin', {
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    if (response.ok) {
      const responseData = await response.json();
      if(responseData.exists ===true){
        navigation.navigate('Home', {id: responseData.id })
      }else{
        setEmailerror('');
        setPassworderror('');
        setErrorMessage('Nom d\'utilisateur ou mot de passe incorrect');
      }
       // Réponse du backend
    } else {
      const responseData = await response.json();
        console.error(responseData.errors.email);
          setEmailerror(responseData.errors.email ? responseData.errors.email[0] : '')
          setPassworderror(responseData.errors.password ? responseData.errors.password[0] : '')
         
    }
  } catch (error) {
    console.error(error);
  }
  };

  return (
    <View style={styles.container}>
      <Image
            source={require('./images/logo2.png')}
            style={styles.cardImage}
          />
      <Text style={styles.heading}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
       <Text style={styles.errorText}>{emailerror}</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
       <Text style={styles.errorText}>{passworderror}</Text>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <TouchableOpacity style={styles.button} title="Login" onPress={handleLogin} >
      <Text style={styles.buttonText}>Login</Text></TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color:'#fe506b',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#fe506b',
    padding: 10,
    borderRadius: 5,
    width:'20%',
    marginBottom:'5%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  cardImage:{
    width:90,
    height:90,
    marginBottom:100,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginBottom:20

  },
});
   
 
export default LoginScreen;
