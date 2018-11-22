import React, {Component} from 'react';
import firebase from 'react-native-firebase';

export default class Loading extends Component{
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            this.props.navigation.navigate(user ? 'Confignav' : 'Login')
        })
    }
}