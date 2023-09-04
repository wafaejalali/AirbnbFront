// HomeScreen.js
import React, { useState } from 'react';
import { View, Text,Image, TextInput, Button, StyleSheet } from 'react-native';

function RegisterScreen({ navigation }) {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [adress, setAdress] = useState('');
    const [telefone, setTelefone] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [passworderror, setPassworderror] = useState('');
    const [nomerror, setNomerror] = useState('');
    const [adresserror, setAdresserror] = useState('');
    const [telefoneerror, setTelefoneerror] = useState('');
    
  
    const handleSignUp = async() => {
      try { const response = await fetch('http://127.0.0.1:8000/api/admin', {
        method: 'POST',
        headers: {
          
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: nom,
          address: adress,
          telefone: telefone,
         
        })
      })
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.errors);
        navigation.navigate('Login')
         // Réponse du backend
      } else {
        const responseData = await response.json();
        console.error(responseData.errors.email);
          setEmailerror(responseData.errors.email ? responseData.errors.email[0] : '')
          setPassworderror(responseData.errors.password ? responseData.errors.password[0] : '')
          setNomerror(responseData.errors.name ? responseData.errors.name[0] : '')
          setAdresserror(responseData.errors.address ? responseData.errors.address[0] : '')
          setTelefoneerror(responseData.errors.telefone ? responseData.errors.telefone[0] : '')
        
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
        <Text style={styles.heading}>Sign Up</Text>
        <TextInput
          placeholder="nom"
          value={nom}
          onChangeText={setNom}
          style={styles.input}
        />
      <Text style={styles.errorText}>{nomerror}</Text>
         <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Text style={styles.errorText}>{emailerror}</Text>
          <TextInput
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <Text style={styles.errorText}>{passworderror}</Text>
        <TextInput
          placeholder="numero de telefone"
          secureTextEntry
          value={telefone}
          onChangeText={setTelefone}
          style={styles.input}
        />
        <Text style={styles.errorText}>{telefoneerror}</Text>
         <TextInput
          placeholder="adress"
          value={adress}
          onChangeText={setAdress}
          style={styles.input}
        />
        <Text style={styles.errorText}>{adresserror}</Text>
        
        <Button title="Sign Up" onPress={handleSignUp} color="#fe506b"/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
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
    cardImage:{
      width:90,
      height:90,
      marginBottom:100,
    },
    errorText: {
      color: 'red',
      marginBottom:5
      
  
    },
  });
export default RegisterScreen;
