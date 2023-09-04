import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import PusherConfig from './PusherConfig';

const ChatScreen = ({ navigation, route }) => {
  const { id_auth, id_user } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const sendMessage = async () => {
    try {
      // Créez un objet de requête
      const requestBody = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newMessage,
          to: id_user, 
          from:id_auth,// Remplacez par l'ID du destinataire
        }),
      };

      // Envoyez la requête au backend
      const response = await fetch('http://127.0.0.1:8000/api/sendMessages', requestBody);

      if (response.status === 201) {
        // Si la requête est réussie, mettez à jour l'état avec le message envoyé
        const sentMessage = await response.json(); // Assurez-vous que le backend renvoie le message créé
        setMessages([...messages, sentMessage]);

        // Effacez le champ de texte après l'envoi du message
        setNewMessage('');
      } else {
        console.error('Échec de l\'envoi du message');
        // Gérez les erreurs ici (par exemple, affichez un message d'erreur à l'utilisateur)
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      // Gérez les erreurs ici (par exemple, affichez un message d'erreur à l'utilisateur)
    }
  };
const setupPusherListener = () => {
    const echo = new Echo({
      broadcaster: 'pusher',
      key: PusherConfig.key,
      cluster: PusherConfig.cluster,
      encrypted: false,
    });

    // Subscribe to a private channel (replace with your channel name)
    const channelName = `chat.${id_user}`; // Replace with the actual user ID
    const channel = echo.private(channelName);

    // Listen for the "NewMessage" event
    channel.listen('NewMessage', (data) => {
      // Handle the received message data here
      console.log('New message received:', data);
      // Update your state or UI with the new message
     
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id_auth: id_auth, id_user: id_user }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMessages(data.messages);
        setLoading(false); // Set loading to false once the data is fetched
      } catch (error) {
        console.error('Error fetching participants:', error);
      }
    };

    fetchData();
    setupPusherListener();
  }, [id_auth, id_user]);

  // The rest of your component logic including Pusher setup and sendMessage

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.message_id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageContainer,
                  item.from === id_auth ? styles.userMessage : styles.otherMessage,
                ]}
              >
                <Text style={styles.messageText}>{item.content}</Text>
              </View>
            )}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your message..."
              value={newMessage}
              onChangeText={setNewMessage}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084FF',
    color: 'white',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderColor: '#E3E3E3',
    borderWidth: 1,
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  sendButton: {
    marginLeft: 12,
    backgroundColor: '#0084FF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
