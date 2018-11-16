import React, {Component} from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';

export default class Notification extends Component {
    static navigationOptions = {
        title: 'Notification',
    }
    render(){
        return(
            <View>
                <Text>Notification page</Text>
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
    }
  })