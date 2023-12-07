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
import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function UserProfilePage() {

    return (
        <View style={styles.container}>
        
          
            <View style={{ marginTop: 70, alignItems: "center" }}>
                <Icon name="user-circle" size={200} color="#008000" />
                <Text style={styles.headText}>First Name:</Text>
                <Text style={styles.headText}>Last Name:</Text>
                <Text style={styles.headText}>Email ID:</Text>
            </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    
      headText: {
        paddingTop: 50,
        paddingLeft: 5,
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
      searchInput: {
        width: "95%",
        backgroundColor: "#fff",
        height: 35,
        borderRadius: 2,
        fontSize: 16,
        marginBottom: 20,
      },
    });
