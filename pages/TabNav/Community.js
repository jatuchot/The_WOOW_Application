import React, {Component} from 'react';
import CommunityHeader from '../../components/communityHeader';
import { StyleSheet,View,Image,Text,TouchableOpacity,TextInput} from 'react-native';
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Community extends Component {
    static navigationOptions = {
        header: <CommunityHeader />
    }
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }
    }
    render(){
        return(
            <View>
                <Text>Community page</Text>
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center'
    },searchbar : {
        height: 40,
        borderColor: 'grey',
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: "white"
    }
  })