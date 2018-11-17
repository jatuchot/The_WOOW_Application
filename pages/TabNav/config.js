import React, {Component} from 'react';
import {ScrollView,SafeAreaView,Image,StyleSheet,View,Text} from 'react-native';
import CommunityIcon from '../../components/communityIcon';
import Icon from "react-native-vector-icons/Ionicons";
import UserScreen from './Userprofile';
import CommunityScreen from './Community';
import NotiScreen from './Notification';
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';

export default class config extends Component {
    render(){
        return(
            <MainNav />
        )
    }
}
const Notify = createStackNavigator({
    Noti: {
      screen: NotiScreen,
    }
  })
  
  const Community = createStackNavigator({
    Community: {
      screen: CommunityScreen,
    },
  })
  
  const User = createStackNavigator({
    User: {
      screen: UserScreen,
    }
  })
  
  const MainNav = createBottomTabNavigator({
    Community: {
      screen: Community,
      navigationOptions:{
        tabBarLabel: 'Community',
        tabBarIcon: ({tintColor}) => (
          <CommunityIcon name="inactive" color={tintColor} size={30}/>
        )
      }
    },
    Noti: {
      screen: Notify,
      navigationOptions:{
        tabBarLabel: 'Notification',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-notifications" color={tintColor} size={30} />
        )
      }
    },
    User: {
      screen: User,
      navigationOptions:{
        tabBarLabel: 'User',
          tabBarIcon: ({tintColor}) => (
              <Icon name="ios-contact" color={tintColor} size={30} />
          )
      }
    }
  },{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: "bottom",
    tabBarOptions:{
        tabStyle: {
            paddingVertical: 4
        },
        indicatorStyle: {
            height: 0
        },
        labelStyle: {
          fontSize: 10,
        },
        scrollEnabled: true,
        activeTintColor: "#3578f6",
        inactiveTintColor: "grey",
    }
  })
  
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })