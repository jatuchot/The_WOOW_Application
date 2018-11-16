import React, {Component} from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';
export default class Community extends Component {
    static navigationOptions = {
        title: 'Community',
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
    }
  })