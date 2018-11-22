import React, {Component} from 'react';
import {ScrollView,SafeAreaView,Image,StyleSheet,View,Text} from 'react-native';
import Login from './pages/Login';
import Confignav from './pages/TabNav/config';
import firebase from 'react-native-firebase';
import { SwitchNavigator } from 'react-navigation';


export default class App extends Component{
  constructor(){
    super();
    this.state = {
      loading: true,
    }
  }
  async componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.setState({
        loading: false,
        user,
      });
    });
  }
  componentWillUnmount() {
    this.authSubscription();
  }
  render(){
      if(this.state.loading) return null;
      if(this.state.user) return <Confignav />
      return <Login />
  }
}
