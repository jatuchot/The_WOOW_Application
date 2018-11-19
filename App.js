import React, {Component} from 'react';
import {ScrollView,SafeAreaView,Image,StyleSheet,View,Text} from 'react-native';
import Login from './pages/Login';
import CommunityIcon from './components/communityIcon';
import Icon from "react-native-vector-icons/Ionicons";
import UserScreen from './pages/TabNav/Userprofile';
import CommunityScreen from './pages/TabNav/Community';
import NotiScreen from './pages/TabNav/Notification';
import { StackNavigator,TabNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <MainNav/>
    );
  }
}

const Notify = StackNavigator({
  Noti: {
    screen: NotiScreen,
  }
})

const Community = StackNavigator({
  Community: {
    screen: CommunityScreen,
  },
})

const User = StackNavigator({
  User: {
    screen: UserScreen,
  }
})

const MainNav = TabNavigator({
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
