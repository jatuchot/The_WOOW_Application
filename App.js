import React, {Component} from 'react';
import {ScrollView,SafeAreaView,Image,StyleSheet,View,Text} from 'react-native';
import Login from './pages/Login';
import Confignav from './pages/TabNav/config';
import firebase from 'react-native-firebase';
import { createSwitchNavigator } from 'react-navigation';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuth : false,
      user: '',
    }
  }
  componentDidMount(){
   this.authCheck = firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({
          isAuth: true,
          user: user,
        });
      }else{
        this.setState({
          isAuth: falser
        })
      }
    })
  }

  componentWillUnmount(){
    this.authCheck();
    console.log(this.state.user)
  }
  
  render() {
    if(this.state.isAuth == true)
      return <Login />
    return <Confignav/>

  }
}

const Routes = createSwitchNavigator({
  LoginScreen : Login,
  Auth: Confignav
})
