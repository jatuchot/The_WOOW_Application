import React, { Component } from 'react';
import {TextInput,Button,StyleSheet,View,ImageBackground,Text,TouchableOpacity,ScrollView} from 'react-native';

export default class Createplan extends Component{
    static navigationOptions = {
        headerTintColor: 'snow',
        headerStyle: {backgroundColor:'snow',height: 90,fontSize: 26},
        headerLeft: (<View>
                        <TouchableOpacity style={{paddingLeft: 10,paddingBottom:15}}><Text style={{fontSize: 18,color: "#007AFF"}}>Cancel</Text></TouchableOpacity>
                        <Text style={{paddingLeft:5, fontSize: 36,fontWeight: 'bold'}}> New Travel Plan</Text>
        </View>),
        headerRight: <View>
            <Button onPress={() => 
            //firebase.auth().signOut()
            //    .then(() => {
            //        alert("Success :: Sign Out ")
            alert("Nothing here")
        } title="Done" style={{paddingBottom:15}}></Button>
        <Text style={{fontSize: 36,fontWeight: 'bold'}}> </Text>
        </View>
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputtripname}placeholder="Trip name insert here"></TextInput>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#FFF'
    },
    inputtripname: {
        fontSize: 26,
        fontWeight: "bold",
        paddingTop: 10,
        paddingLeft: 10
    }
})