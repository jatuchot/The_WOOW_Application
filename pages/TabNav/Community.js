import React, {Component} from 'react';
import CommunityHeader from '../../components/communityHeader';
import { StyleSheet,View,ImageBackground,Text,TouchableOpacity,ScrollView} from 'react-native';
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
            <ScrollView>
            <View style={styles.container}>
                <View style={{flex:1}}>
                        <View style={styles.card}>
                            <ImageBackground
                                style={styles.cardimg}
                                imageStyle={{borderRadius: 40}}
                                source={require('../../assets/img/ayu.png')}>
                                <View style={{position: 'absolute'}}>
                                    <Text style={{paddingLeft:15,paddingTop:195,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 1,height: 1},textShadowRadius: 3,fontSize: 18,fontWeight:'bold'}}>Bangkok Temples - 7 places you should go once in your life</Text>
                                    <Text style={{paddingLeft:15,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 1,height: 1},textShadowRadius: 3,fontSize: 12,fontWeight:'bold'}}>By {this.state.name} <Text style={{fontWeight:'normal'}}>- 1 day ago</Text></Text>
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
                                    <Text style={{paddingLeft:15,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 1,height: 1},textShadowRadius: 3,fontSize: 12,fontWeight:'bold'}}>By {this.state.name}  <Text style={{fontWeight:'normal'}}>- 2 month ago</Text></Text>
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
                                    <Text style={{paddingLeft:15,color: 'white',textShadowColor: 'black',textShadowOffset:{width: 1,height: 1},textShadowRadius: 3,fontSize: 12,fontWeight:'bold'}}>By {this.state.name}  <Text style={{fontWeight:'normal'}}>- 2 month ago</Text></Text>
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
    },searchbar : {
        height: 40,
        borderColor: 'grey',
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: "white"
    },
    card: {
        paddingBottom: 20,
        width: 350,
        height: 275,
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
        marginBottom: 15
    },
    
    cardimg:{
        width: 350,
        height: 275,
    },
  })