// DetailsScreen.js
import React, { useState } from 'react';
import { View, Text,ScrollView, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function ProfilScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.iconBar}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={30} color="gray" />
        <Text style={styles.cardDescription}>home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>       
        <Icon name="comments" size={30} color="gray" />
        <Text style={styles.cardDescription}>message</Text>
       </TouchableOpacity>
       
        <TouchableOpacity style={styles.icon}>  
       <Icon name="suitcase" size={30} color="gray" />
       <Text style={styles.cardDescription}>voyage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
        <Icon name="map-marker" size={30} color="gray" />
        <Text style={styles.cardDescription}>map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Profil')}>
        <Icon name="user" size={30} color="gray" />
        <Text style={styles.cardDescription}>profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
        flexGrow: 1 ,
        
      },
    iconBar: {
        flexDirection: 'row',
        backgroundColor:'#f0f0f0',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
        position: 'absolute',
        paddingLeft:35,
        paddingRight:35,
        bottom: 0,
        left: 0,
        right: 0,
      },
      icon:{
        justifyContent:'center',
      }
     
  
});
   
 
export default ProfilScreen;
