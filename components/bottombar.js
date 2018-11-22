import React from 'react'
import {Ionicons} from "react-native-vector-icons";
import UserScreen from '../pages/TabNav/Userprofile';
import CommunityScreen from '../pages/TabNav/Community';
import NotiScreen from '../pages/TabNav/Notification';
import {createBottomTabNavigator } from 'react-navigation';
export default createBottomTabNavigator(
    {
      Community: {
        screen: CommunityScreen,
      },
      Noti: {
        screen: NotiScreen,
      },
      User: {
        screen: UserScreen
      }
    },
    {
      navigationOptions: ({nav}) => ({
        tabBarIcon: ({focused,tintColor}) => {
          const {routeName} = nav.state;
          let iconName;
          if(routeName === 'Community'){
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          }
          else if(routeName === 'Noti'){
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          }
          else if(routeName === 'User'){
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />
        }
      }),
      tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray'
      }
    }
  )