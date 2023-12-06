import React from "react";
import {View, Button, StyleSheet, Alert} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

const ImageSelector = props => {

    const verifyPermissions = async() => {
        const cameraResult = await ImagePicker.requestCameraPermissionsAsync();
        const libraryResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(cameraResult.status !== 'granted' && libraryResult.status!=='granted'){
            Alert.alert('Grant Permissions first to use the app', [{text : 'OK'}]);
            return false;
        }
        else{
            return true;
        }
    }

    const retrieveImageHandler = async () => {
        const hasPermissions = await verifyPermissions();
        if (!hasPermissions){
            console.log('We do not have permissions');
            return false;      
        }
        const image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes : ImagePicker.MediaTypeOptions.Images,
            allowsEditing : true,
            aspect : [4,3],
            quality : 0.5
        })
        if (!image.canceled){
            props.onImageSelected(image.assets[0].uri)
        }
    }

    const takeImageHandler = async () => {
        const hasPermissions = await verifyPermissions();
        if (!hasPermissions){
            console.log('We do not have permissions');
            return false;      
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing : true,
            aspect : [16, 9],
            quality : 0.5,
        })
        if (!image.canceled){
            props.onImageSelected(image.assets[0].uri)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button color='green' style={styles.button} title="Gallery" onPress={retrieveImageHandler}/>
                <Button  style={styles.button} title="Camera" onPress={takeImageHandler}/>
            </View>
        </View>
    )

}



const styles = StyleSheet.create({
    container:{
        padding:10,
        margin:5,
        height:40,
        alignItems :'center',
        justifyContent : 'center'
    },
    buttonContainer :{
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : '100%',
        minHeight : 40
    },
    button : {
        paddingVertical : 25,
        width : '100%'
    }
})

export default ImageSelector;