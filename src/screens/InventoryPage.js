import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import MainMenu from "../components/MainMenu";

export default function InventoryPage() {


    return (
        <View style={styles.container}>
          <MainMenu />
          <Text style={styles.headText}>Inventory List</Text>
          <Text>cards here</Text>
          <Text>cards here</Text>
          <Text>cards here</Text>
          <Text>cards here</Text>
          <Text>cards here</Text>
          <Text>cards here</Text>
          <Text>cards here</Text>
          <Text>cards here</Text>
          <Text>cards here</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={() => console.log('Cancel Pressed')}>
            <Text style={styles.text1}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => console.log('Save Pressed')}>
            <Text style={styles.text2}>Save</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    
      headText: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
      },
     
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 8,
        
      },
    
      button1: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 4,
        width: '50%',
        borderWidth: 1,
        borderColor: '#008000',
        margin: 5,
        alignItems: 'center',
      },
      text1: {
        color: '#008000',
        textAlign: 'center',
      },
      button2: {
        backgroundColor: '#008000',
        padding: 10,
        borderRadius: 4,
        width: '50%',
        margin: 5,
        alignItems: 'center',
      },
      text2: {
        color: '#FFFFFF',
        textAlign: 'center',
      },
    });
    