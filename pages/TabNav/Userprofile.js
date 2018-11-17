import React, {Component} from 'react';
import {View,StyleSheet,ScrollView,Image,Text,Button,TouchableOpacity,ImageBackground} from 'react-native';
import firebase from 'react-native-firebase';

export default class Userprofile extends Component {
    static navigationOptions = {
        headerTintColor: 'snow',
        headerStyle: {backgroundColor:'snow',height: 90,fontSize: 26},
        headerLeft: <Text style={{paddingLeft: 15,top: 15,fontSize: 36,fontWeight: 'bold'}}>User Profile</Text>,
        headerRight: <Button onPress={() => this.Loggedout} title="Logout" style={{paddingBottom:15,top:-20}}></Button>
    }
    Loggedout(){
        console.log("Logout func")
        firebase.auth().signOut();
    }
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Image 
                        style={styles.user}
                        source={require('../../assets/img/man.jpg')}>
                    </Image>
                    <View style={{alignItems: 'center',justifyContent: 'center'}}>
                        <Text style={{fontSize: 26,top: 35,fontWeight: 'bold'}}>Chanchai Pramulmark</Text>
                        <Text style={{fontSize: 18,top: 35}}>chanchai.p@meowmail.com</Text>
                    </View>
                    <View style={{paddingTop: 50,paddingBottom:20}}>
                        <TouchableOpacity
                            style={styles.createBtn}
                            underlayColor='#FFFFFF'>
                            <Text style={styles.fbtext}> Create new travel plan</Text>
                        </TouchableOpacity> 
                    </View>
                    
                    <View style={{flex:1}}>
                        <View style={styles.card}>
                            <ImageBackground
                                style={styles.cardimg}
                                imageStyle={{borderRadius: 40}}
                                source={require('../../assets/img/ayu.png')}>
                                <View style={{position: 'absolute'}}>
                                    <Text style={{paddingLeft:15,paddingTop:195,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 1,height: 1},textShadowRadius: 3,fontSize: 18,fontWeight:'bold'}}>Bangkok Temples - 7 places you should go once in your life</Text>
                                    <Text style={{paddingLeft:15,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 1,height: 1},textShadowRadius: 3,fontSize: 12,fontWeight:'bold'}}>By Chanchai Pramulmark <Text style={{fontWeight:'normal'}}>- 1 day ago</Text></Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.card}>
                            <ImageBackground
                                style={styles.cardimg}
                                imageStyle={{borderRadius: 40}}
                                source={require('../../assets/img/phuket.jpg')}>
                                <View style={{position: 'absolute'}}>
                                    <Text style={{paddingLeft:15,paddingTop:195,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 1,height: 1},textShadowRadius: 3,fontSize: 18,fontWeight:'bold'}}>Phuket Sea Challenge Trip</Text>
                                    <Text style={{paddingLeft:15,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 1,height: 1},textShadowRadius: 3,fontSize: 12,fontWeight:'bold'}}>By Chanchai Pramulmark <Text style={{fontWeight:'normal'}}>- 2 month ago</Text></Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.card}>
                            <ImageBackground
                                style={styles.cardimg}
                                imageStyle={{borderRadius: 40}}
                                source={require('../../assets/img/phuket.jpg')}>
                                <View style={{position: 'absolute'}}>
                                    <Text style={{paddingLeft:15,paddingTop:195,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 1,height: 1},textShadowRadius: 3,fontSize: 18,fontWeight:'bold'}}>Phuket Sea Challenge Trip</Text>
                                    <Text style={{paddingLeft:15,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 1,height: 1},textShadowRadius: 3,fontSize: 12,fontWeight:'bold'}}>By Chanchai Pramulmark <Text style={{fontWeight:'normal'}}>- 2 month ago</Text></Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    user: {
        top: 20,
        paddingTop: 20,
        width: 150,
        height: 150,
        borderRadius: 75
    },
    card: {
        paddingBottom: 20,
        width: 350,
        height: 350,
        borderRadius: 20,
        borderColor: '#eee',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    
    cardimg:{
        width: 350,
        height: 275,
    },
    createBtn:{
        marginRight:0,
        marginLeft:0,
        marginTop:0,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor: '#007aff',
        color: '#FFFFFF',
        borderRadius: 10,
        borderColor: '#FFFFFF'
    },
    fbtext:{
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingLeft: 80,
        paddingRight: 80
    },
})