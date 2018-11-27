import React, {Component} from 'react';
import {ActivityIndicator,ScrollView,StyleSheet,View,Image,Text,Button,TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase'
export default class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            noti: [],
            isloading: true
        }
    }
    static navigationOptions = {
        headerTintColor: 'snow',
        headerStyle: {backgroundColor:'snow',height: 90,fontSize: 26},
        headerLeft: <Text style={{paddingLeft: 15,top: 15,fontSize: 36,fontWeight: 'bold'}}>Notification</Text>,
    }
    componentWillMount() {
        const notiData = firebase.firestore().collection('announcement')
        notiData.get().then((data) => {
            const Noti = [];
            data.forEach((doc) => {
                //console.log(doc.id, '=>', doc.data())
                Noti.push({
                    Detail: doc.data().Detail,
                    Category: doc.data().Category
                })
            })
            this.setState({
                isloading: false,
                noti: Noti
            })
            console.log(Noti)
        })
    }
    render(){
        const loadingDone = (
            this.state.noti.map(notiData => {
                return(
                    <View style={styles.card}>
                        <Text style={styles.titleNoti}>{notiData.Category}</Text>
                        <Text style={styles.contentNoti}>{notiData.Detail}</Text>
                    </View>
                )
            }) 
        )
        const loadingContent = <ActivityIndicator size="large" style={{paddingTop: 250}} />
        return(
            <ScrollView style={{backgroundColor:'white'}}>
                <View style={styles.container}>
                    {this.state.isloading ? loadingContent : loadingDone }
                </View>
            </ScrollView>
        )
    }
} 
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
        flex: 1,
        flexGrow: 2,
        alignItems: 'center',
    },
    card: {
        width: 344,
        height: 127,
        borderRadius: 20,
        borderColor: '#eee',
        borderWidth: 1,
        backgroundColor:'#FFF',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    titleNoti:{
        paddingLeft: 15,
        paddingTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    contentNoti:{
        paddingLeft: 15,
        paddingRight: 15,
        //paddingTop: 20,
        fontSize: 16,
        color: '#a6a6a6',
        fontWeight: 'bold'
    }
  })