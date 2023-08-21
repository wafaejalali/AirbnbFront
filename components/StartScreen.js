
import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity, Button, StyleSheet,ImageBackground  } from 'react-native';
const backgroundImage = require('./images/kari.png');
function StartScreen({ navigation }) {
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    };
    
    const styles = StyleSheet.create({
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      container: {
        flex: 1,      
        alignItems: 'center',
        marginTop: 620,
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'space-between', // Distribute space evenly between items
        paddingHorizontal: 20, 
      },
      button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 100,
        width: 120,
        alignItems: 'center',
        height:50,
        
        width:170,
        
       
      },
      buttonText: {
        color: '#fe506b',
        fontSize: 20,
       
      },
    });
    
    export default StartScreen;