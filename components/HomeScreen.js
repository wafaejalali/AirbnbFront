import React, { useState } from 'react';
import { View, Text,ScrollView, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const HomeScreen = ({ navigation ,route}) => {
  const {id} = route.params;
  
  return (
    <View vertical scrollEnabled style={styles.container} onPress={() => navigation.navigate('Property')}>
      <View style={styles.searchBar}>
      
        <TextInput
          style={styles.searchInput}
          placeholder="Recherche"
        />
       
        <TouchableOpacity >
        <Icon name="sliders" size={30} color="black" />
        </TouchableOpacity>
      
      </View>
      
      <ScrollView style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Property',{id_property: 1,id_auth:id,id_user:1 })}>
          <Image
            source={require('./images/img2.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardDescription}>Description de la carte 1</Text>   
          <View style={styles.myligne}><Icon name="map-marker" size={25} color="#fe506b" /><Text style={styles.text}>  carte 1</Text>
          <Text style={styles.prix}> 7,050 Dhm</Text>
          </View></TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Property',{id_property: 2,id_auth:id,id_user:2 })}>
          <Image
            source={require('./images/img3.jpg')}
            style={styles.cardImage}
          />
            <Text style={styles.cardDescription}>Description de la carte 1</Text>   
          <View style={styles.myligne}><Icon name="map-marker" size={25} color="#fe506b" /><Text style={styles.text}>  carte 1</Text>
          <Text style={styles.prix}> 7,050 Dhm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('./images/img2.jpg')}
            style={styles.cardImage}
          />
            <Text style={styles.cardDescription}>Description de la carte 1</Text>   
          <View style={styles.myligne}><Icon name="map-marker" size={25} color="#fe506b" /><Text style={styles.text}>  carte 1</Text>
          <Text style={styles.prix}> 7,050 Dhm</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require('./images/img3.jpg')}
            style={styles.cardImage}
          />
            <Text style={styles.cardDescription}>Description de la carte 1</Text>   
          <View style={styles.myligne}><Icon name="map-marker" size={25} color="#fe506b" /><Text style={styles.text}>  carte 1</Text>
          <Text style={styles.prix}> 7,050 Dhm</Text>
          </View>
        </TouchableOpacity>

        {/* Ajoutez plus de cartes ici */}
      </ScrollView>

      <View style={styles.iconBar}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={25} color="gray" />
        <Text style={styles.text}>home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>       
        <Icon name="comments" size={25} color="gray" onPress={() => navigation.navigate('ChatList',{id_auth:id})}/>
        <Text style={styles.text}>message</Text>
       </TouchableOpacity>
       
        <TouchableOpacity style={styles.icon}>  
       <Icon name="suitcase" size={25} color="gray" />
       <Text style={styles.text}>voyage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
        <Icon name="map-marker" size={25} color="gray" />
        <Text style={styles.text}>map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Profil')}>
        <Icon name="user" size={25} color="gray" />
        <Text style={styles.text}>profil</Text>
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
  searchBar: {
   
    flexDirection: 'row', 
    margin:10, 
    width:'100%'
    
    
  },
  searchInput: {
   
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    width:'90%',
  
  },
  cardContainer: {
    flexDirection: 'column', 
    marginBottom: 6,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 18,
    borderRadius: 18,
    width: '95%',
    margin: 10,
    elevation: 12,
    borderRadius: 8,
    height:250,
  },
  cardImage: {
    borderRadius: 28,
    width: '100%',
    height: 170,
    borderRadius: 3,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    paddingLeft:9,
  },
  iconBar: {
    flexDirection: 'row',
    backgroundColor:'#f0f0f0',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
    paddingLeft:25,
    paddingRight:25,
    paddingBottom:15,
    paddingTop:9,
    height:55,
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon:{
    justifyContent:'center',
   
    alignItems: 'center', 
  },
  text:{
    fontSize:15,
    color:"gray",
  },
  myligne:{
    flexDirection: 'row',
    backgroundColor:'#f0f0f0',
    alignItems:'baseline',
    paddingLeft:9,
    paddingTop:10,
  },
  prix :{
    paddingLeft:170,
    fontWeight:'bold',
    fontSize:20,
    color:'gray'
  },
 
});

export default HomeScreen;
