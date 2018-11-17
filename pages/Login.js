import React, {Component} from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';
import { AccessToken, LoginManager} from 'react-native-fbsdk'; 
import firebase from 'react-native-firebase';
import Icon from "react-native-vector-icons/FontAwesome";
import Confignav from './TabNav/config';
const styles = StyleSheet.create({
    BGapp:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#d3f4ff',
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
    constructor(props){
        super(props);
        this.check = null
        this.state={
            user: null,
            isAuth: false,
            accessToken: ''
        }
    }
    /*
    componentDidMount() {
        this.check = firebase.auth().onAuthStateChanged((curUser) => {
            //console.log(`Changed User : ${JSON.stringify(curUser.toJSON())}`);
            this.setState({
                user : curUser
            })
        })
    }*/
    loginFacebook = () => {
        LoginManager
            .logInWithReadPermissions(['public_profile','email','user_status'])
            .then((res)=>{
                if(res.isCancelled){
                    return Promise.reject(new Error('User canceled'));
                }
                console.log(`Login Success with permission: ${res.grantedPermissions.toString()}`);
                return AccessToken.getCurrentAccessToken();
            }).then(data => {
                let accessToken = data.accessToken
                //this.setState ={
                //    accessToken: accessToken
                //}
                const credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
                return firebase.auth().signInWithCredential(credential); 
            }).then((user) => {
                let info = JSON.stringify(user)
                console.log(`Facebook Login with user : ` + info)
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
                    <View style={{paddingTop: 225}}>
                        <TouchableOpacity
                            onPress={this.loginFacebook}
                            style={styles.facebookButton}
                            underlayColor='#FFFFFF'>
                            <Text style={styles.fbtext}><Icon name="facebook" size={15}/>  Login with Facebook</Text>
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

