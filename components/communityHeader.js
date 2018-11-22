import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class comHeader extends Component{

    render(){
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Community</Text>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="ios-search" size={30} />
                    <TextInput
                        style={styles.input}
                        placeholder="Type here"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        height: 150,
        backgroundColor: 'snow',
        borderBottomWidth: 1,
<<<<<<< HEAD
        borderColor: '#eee',
=======
        borderColor: '#ddd',
>>>>>>> All_new_update
    },
    headerTitle: {
        fontSize: 36,
        paddingLeft: 15,
        paddingTop: 60,
        paddingBottom: 5,
        fontWeight: 'bold'
    },
    searchSection: {
        flex: 1,
<<<<<<< HEAD
=======
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
>>>>>>> All_new_update
        flexDirection: 'row',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
<<<<<<< HEAD
        paddingTop: 5,
=======
        paddingTop: 2,
>>>>>>> All_new_update
        paddingLeft: 10,
    },
    input: {
        flex: 1,
        borderRadius: 20,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#424242',
    },
})