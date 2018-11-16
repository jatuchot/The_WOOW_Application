import React, {Component} from 'react';
import {View,StyleSheet,ScrollView,Image,Text,Button,TouchableOpacity,ImageBackground} from 'react-native';

export default class Userprofile extends Component {
    static navigationOptions = {
        headerStyle: {height: 90,fontSize: 26},
        headerLeft: <Text style={{paddingLeft: 15,top: 15,fontSize: 36,fontWeight: 'bold'}}>User Profile</Text>,
        headerRight: <Button title="Logout" style={{paddingBottom:15,top:-20}}></Button>
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
                    <View style={{top:50}}>
                        <TouchableOpacity
                            style={styles.createBtn}
                            underlayColor='#FFFFFF'>
                            <Text style={styles.fbtext}> Create new travel plan</Text>
                        </TouchableOpacity> 
                    </View>
                    
                    <View style={{flex:1,top:70}}>
                        <View style={styles.card}>
                            <ImageBackground
                                style={styles.cardimg}
                                imageStyle={{borderRadius: 40}}
                                source={require('../../assets/img/ayu.png')}>
                                <View style={{position: 'absolute'}}>
                                    <Text style={{paddingLeft:15,paddingTop:195,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 10,height: 10},textShadowRadius: 10,fontSize: 18,fontWeight:'bold'}}>Bangkok Temples - 7 places you should go once in your life</Text>
                                </View>
                                <View style={{position: 'absolute'}}>
                                    <Text style={{paddingLeft:15,paddingTop:240,color: 'white',textShadowColor: 'black',fontSize: 12,fontWeight:'bold'}}>By Chanchai Pramulmark <Text style={{fontWeight:'normal'}}>- 1 day ago</Text></Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={{flex:2,top:80}}>
                        <View style={styles.card}>
                            <ImageBackground
                                style={styles.cardimg}
                                imageStyle={{borderRadius: 40}}
                                source={require('../../assets/img/ayu.png')}>
                                <View style={{position: 'absolute'}}>
                                    <Text style={{color: 'white',}}>Test</Text>
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
        flexGrow: 2,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    user: {
        top: 20,
        width: 150,
        height: 150,
        borderRadius: 75
    },
    card: {
        width: 350,
        height: 350,
        borderRadius: 20,
        borderColor: '#eee',
        borderBottomWidth: 0,
        shadowColor: '#a6a6a6',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
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