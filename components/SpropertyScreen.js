import React, { useState ,useRef,useEffect } from 'react';
import { View,ScrollView, FlatList,TouchableOpacity,Text, Image, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import { useNavigation } from '@react-navigation/native';
//import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
const PaginationPoint = ({ currentIndex, length }) => {
    return (
      <View style={styles.paginationContainer}>
        {Array.from({ length }, (_, index) => (
          <View
            key={index}
            style={[
              styles.paginationPoint,
              index === currentIndex && styles.activePaginationPoint,
            ]}
          />
        ))}
      </View>
    );
  };
  const CommentCard = ({ comment }) => (
    <View style={styles.commentCard}>
      
      <Text>{comment.text}</Text>
      <Image source={comment.profileImage} style={styles.profileImage} />
    <Text style={styles.username}>{comment.username}</Text>
    </View>
  );
  const SpropertyScreen = ({route}) => {
    const {id_property,id_auth,id_user} = route.params;
    const [location, setLocation] = useState(null);
    const [comments, setComments] = useState([
      {
        id: '1',
        username: 'User123',
        text: 'Great post!',
        profileImage: require('./images/profil2.png'),
      },
      {
        id: '2',
        username: 'JaneDoe',
        text: 'Thanks for sharing!',
        profileImage:require( './images/profil2.png'),
      },
    ]);
  
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position.coords);
      },
      error => {
        console.log(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);
    const navigation = useNavigation();
    const imageSliderRef = useRef(null);
    const imageUrls = [
        require('./images/img3.jpg'),
        require('./images/img2.jpg'),
        require('./images/kari.png'),
        // ... Ajoutez plus d'URLs d'images ici
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

      const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
          const newIndex = viewableItems[0].index;
          setCurrentIndex(newIndex);
        }
      }).current;
    
      const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item} style={styles.image} />
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
            <Icon name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
        </View>
      );
    
      return (
        <ScrollView style={styles.container}>
          <FlatList
            ref={imageSliderRef}
            data={imageUrls}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            onMomentumScrollEnd={(event) => {
              const offsetX = event.nativeEvent.contentOffset.x;
              const newIndex = Math.ceil(offsetX / Dimensions.get('window').width);
              setCurrentIndex(newIndex);
            }}
            onViewableItemsChanged={onViewableItemsChanged}
          />
          <PaginationPoint currentIndex={currentIndex} length={imageUrls.length} />
          <Text style={styles.cardDescription}>Description de la carte 1</Text>   
          <View style={styles.myligne}><Icon name="star" size={20} color="gold" /><Text > 4.1 ,</Text><Text style={styles.text}>232 commantaires</Text>      
        </View>
        <View style={styles.line} />
        <Text style={styles.cardDescription}>Ce que propose ce logement</Text>
        <View style={styles.myligne}><Text >- Cuisin </Text></View>   
        <View style={styles.myligne}><Text >- Wifi</Text></View> 
        <View style={styles.myligne}><Text >- climatisation</Text></View> 
        <TouchableOpacity style={styles.button} title="afficher">
           
        <Text style={styles.buttonText}>afficher les autres equipements</Text></TouchableOpacity>
        <View style={styles.line} />
        <Text style={styles.cardDescription}>Ou ce situe ce logement</Text>
        <View style={styles.map}>
      
        </View>
        <View style={styles.line} />
        <View >
        <View style={styles.myligne}><Icon name="star" size={20} color="black" /><Text style={styles.comme}> 4.1 .</Text><Text style={styles.comme}>232 commantaires</Text></View>
      <FlatList
        horizontal
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CommentCard comment={item} />}
      />
    </View>
    <View style={styles.line} />
    <TouchableOpacity style={styles.button} title="afficher" onPress={() => navigation.navigate('Chat',{id_property: id_property,id_auth:id_auth,id_user:id_user})}>
    <Text style={styles.buttonText}>contacter l'hote</Text></TouchableOpacity>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
        cardDescription: {
            fontSize: 20,
            color: 'black',
            top:15,
            paddingLeft:9,
          },comme:{
            fontSize: 20,
            color: 'black',
            marginBottom:20,
           
          },
          map:{
            borderRadius: 5,
            marginTop: 20,
            marginLeft:30,
            width: 350,
            alignItems: 'center',
            height:200, 
            backgroundColor: 'gray',
          },
          text:{
            fontSize:15,
            color:"gray",
            textDecorationLine: 'underline',
          },
          myligne:{
            flexDirection: 'row',
            paddingTop:13,
            alignItems:'baseline',
            paddingLeft:9,   
          },
      container: {
        flex: 1,
      },
      imageContainer: {
        flex: 1,
       
      },  
        button: {
        backgroundColor: '#f0f0f0',
        borderWidth: 2, // Border width
        borderColor: 'black',
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        width: 300,
        alignItems: 'center',
        height:40,
        marginLeft:40,
       
        
       
      },
      buttonText: {
        color: 'black',
        fontSize: 15,
        
       
      },
      image: {
        width: Dimensions.get('window').width,
        height: 300,
        resizeMode: 'cover',
      },
      iconContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: 'white',
       
        padding: 10,
        borderRadius: 50,
      },
      paginationContainer: {
        position: 'absolute',
        top: 280,
        left: 170,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      paginationPoint: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginHorizontal: 5,
      },
      activePaginationPoint: {
        backgroundColor: 'white',
      }, line: {
        width: 370,
        height: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color:'gray', // Color of the line
        marginVertical: 10,
        marginLeft:10,
        marginRight:10, // Adjust spacing if needed
      },commentCard: {
        backgroundColor: '#fff',
        width: 350,
        marginRight: 10,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        marginLeft:10,
        borderColor: '#ccc',
        height:200,
        marginBottom:20,
      },
      profileImage: {
        width: 30,
        height: 30,
        borderRadius: 25,
        top:100 ,
        
      },
      username: {
        fontWeight: 'bold',
        marginBottom: 5,top:75 ,
        left:40,
      },
    });
  export default SpropertyScreen;
  