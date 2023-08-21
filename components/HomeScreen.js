import React from 'react';
import { View, Text,ScrollView, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const HomeScreen = ({ navigation }) => {
  return (
    <View vertical scrollEnabled style={styles.container}>
      <View style={styles.searchBar}>
      <TouchableOpacity >
        <TextInput
          style={styles.searchInput}
          placeholder="Recherche"
        />
        </TouchableOpacity>
        <TouchableOpacity >
        <Icon name="sliders" size={30} color="black" />
        </TouchableOpacity>
       
      </View>
      
      <ScrollView style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('./images/img2.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardDescription}>Description de la carte 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require('./images/img3.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardDescription}>Description de la carte 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('./images/img2.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardDescription}>Description de la carte 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require('./images/img3.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardDescription}>Description de la carte 2</Text>
        </TouchableOpacity>

        {/* Ajoutez plus de cartes ici */}
      </ScrollView>

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
  searchBar: {
   
    flexDirection: 'row', 
    margin:10, 
    
    
  },
  searchInput: {
   
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    width:350,
    marginRight:5,
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

export default HomeScreen;
