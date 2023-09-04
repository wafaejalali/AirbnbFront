// ChatListScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ChatList = ({ navigation ,route}) => {
  const {id_auth} = route.params;
  const [chats, setChats] = useState([]);

  const fetchParticipants = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/participant', {
        method: 'POST', // You can use POST to send data to the backend
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_auth:id_auth }), // Send the id_auth as JSON data
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const participants = data.participants;
      setChats(participants);
      console.log(participants);
      // Now you have the list of participants, which you can use in your React Native app.
    } catch (error) {
      console.error('Error fetching participants:', error);
    }
  };

  useEffect(() => {
   
    fetchParticipants();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.user.user_id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate('Chat',{id_auth:id_auth,id_user:item.user.user_id})}
          >
           
              <View style={styles.defaultAvatar}>
                <Text style={styles.initials}>{item.user.name[0]}</Text>
              </View>
            
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{item.user.name}</Text>
              <Text style={styles.lastMessage}>{item.last_message.content}</Text>
            </View>
           
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  defaultAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0084FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontSize: 18,
    color: 'white',
  },
  chatInfo: {
    marginLeft: 12,
    flex: 1,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    color: 'gray',
  },
  unreadBadge: {
    backgroundColor: '#0084FF',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  unreadText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ChatList;
