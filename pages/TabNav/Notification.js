import React, {Component} from 'react';
import {ScrollView,StyleSheet,View,Image,Text,Button,TouchableOpacity} from 'react-native';
<<<<<<< HEAD

export default class Notification extends Component {
=======
import firebase from 'react-native-firebase'
export default class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            noti: [],
        }
    }
>>>>>>> All_new_update
    static navigationOptions = {
        headerTintColor: 'snow',
        headerStyle: {backgroundColor:'snow',height: 90,fontSize: 26},
        headerLeft: <Text style={{paddingLeft: 15,top: 15,fontSize: 36,fontWeight: 'bold'}}>Notification</Text>,
    }
<<<<<<< HEAD
    render(){
        return(
            <ScrollView style={{backgroundColor:'white'}}>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.titleNoti}>News</Text>
                        <Text style={styles.contentNoti}>Daily Digest: The top 10 trips that you should try</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.titleNoti}>Updates</Text>
                        <Text style={styles.contentNoti}>Change log version 0.2 released, what's new in this version? Check it out!</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.titleNoti}>News</Text>
                        <Text style={styles.contentNoti}>Daily Digest: Trips in Bangkok area. There is many places that you shold try in Bangkok, the capital city in Thailand.</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.titleNoti}>Account Warning</Text>
                        <Text style={styles.contentNoti}>Warning: your account appears to be spamming other users and posting monitize content inside travel plan. </Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.titleNoti}>News</Text>
                        <Text style={styles.contentNoti}>Daily Digest: The top 10 trips that you should try</Text>
                    </View>
                </View>
=======
    componentWillMount() {
        const notiData = firebase.firestore().collection('announcement')
        notiData.get().then((data) => {
            data.forEach((doc) => {
                console.log(doc.data())
                this.setState({
                    noti: doc.data()
                })
            })
        })
    }
    render(){
        var data = Objects.save(this.state.noti).map(function(gg){
            return{
                category: gg.Category,
                detail: gg.Detail
            }
        })
        console.log(data)
        if(this.state.noti && this.state.noti.length > 0){
            return(
                <ScrollView style={{backgroundColor:'white'}}>
                {this.state.noti.map((data,index)=>{
                    <View style={styles.container}>
                        <View style={styles.card}>
                            <Text style={styles.titleNoti}>{this.state.noti.Category}</Text>
                            <Text style={styles.contentNoti}>{this.state.noti.Detail}</Text>
                        </View>
                    </View>
                })}
                </ScrollView>
            )
        }
        return(
            <ScrollView style={{backgroundColor:'white'}}>
                {/*<View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.titleNoti}>{this.state.noti.Category}</Text>
                        <Text style={styles.contentNoti}>{this.state.noti.Detail}</Text>
                    </View>
                </View> */}
>>>>>>> All_new_update
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