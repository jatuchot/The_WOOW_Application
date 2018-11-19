import React, {Component} from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';

import { AccessToken, LoginManager, LoginButton} from 'react-native-fbsdk'; 
import Icon from "react-native-vector-icons/FontAwesome";
const styles = StyleSheet.create({
    BGapp:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#20A2C2',
    },
    container:{
        flex: 1,
        flexGrow: 1,
    },
    logo:{
        width: 200,
        height: 200
    },
    facebookButton: {
        marginRight:30,
        marginLeft:30,
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor: '#4267B2',
        color: '#FFFFFF',
        borderRadius: 30,
        borderColor: '#FFFFFF'
    },
    twitterButton: {
        marginRight:30,
        marginLeft:30,
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor: '#1da1f2',
        color: '#FFFFFF',
        borderRadius: 30,
        borderColor: '#FFFFFF'
    },
    fbtext:{
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    downImg:{
        width: '100%',
        height: 325,
    },
    btnIcon: {
        height: 25,
        width: 25,
    },
})
export default class Login extends Component {
    loginFacebook = () => {
        LoginManager
            .logInWithReadPermissions(['public_profile','email'])
            .then((res)=>{
                if(res.isCancelled){
                    return Promise.reject(new Error('User canceled'));
                }
                console.log('Login Success with permission: ${res.grantedPermissions.toString()}');
                return AccessToken.getCurrentAccessToken();
            }).then(data => {
                { /* const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                return firebase.auth().signInWithCredential(credential); */}
            }).then((user) => {
                console.log('Facebook Login with user : ${JSON.stringfy(user.toJSON())')
            }).catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <View style={styles.BGapp}>
                <View style={styles.container}>
                    <View style={{top:125,justifyContent: 'center',flexDirection: 'row'}}>
                        <Image 
                            style={styles.logo}
                            source={require('../assets/img/woow.png')}>
                        </Image>
                    </View>
                    <View style={{top:175}}>
                        <TouchableOpacity
                            onPress={this.loginFacebook}
                            style={styles.facebookButton}
                            underlayColor='#FFFFFF'>
                            <Text style={styles.fbtext}><Icon name="facebook" size={15}/>  Login with Facebook</Text>
                        </TouchableOpacity>     
                        <TouchableOpacity
                            style={styles.twitterButton}
                            underlayColor='#FFFFFF'>
                            <Text style={styles.fbtext}><Icon name="twitter" size={15}/>  Login with Twitter</Text>
                        </TouchableOpacity>     
                    </View>
                </View> 

                <View>
                    <Image 
                        style={styles.downImg}
                        source={require('../assets/img/downimg.png')}>
                    </Image>
                </View>  
            </View>
        )
    }
}

