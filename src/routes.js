import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/logo-hor.png';

import Header from '~/components/Header';

import SignIn from '~/pages/SignIn';

import CheckIns from '~/pages/CheckIns';

import Requests from '~/pages/New/Requests';
import Details from '~/pages/New/Details';
import NewRequest from '~/pages/New/NewRequest';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            StudentCheckIns: {
              screen: createStackNavigator(
                {
                  CheckIns,
                },
                {
                  navigationOptions: {
                    tabBarLabel: 'CheckIns',
                    tabBarIcon: ({ tintColor }) => (
                      <Icon name="check" size={20} color={tintColor} />
                    ),
                  },
                  defaultNavigationOptions: {
                    headerBackground: <Header />,
                    headerBackImage: () => (
                      <Icon name="chevron-left" size={20} color="#000" />
                    ),
                  },
                }
              ),
            },
            HelpOrders: {
              screen: createStackNavigator(
                {
                  Requests,
                  NewRequest,
                  Details,
                },
                {
                  navigationOptions: {
                    tabBarLabel: 'Pedir ajuda',
                    tabBarIcon: ({ tintColor }) => (
                      <Icon name="live-help" size={20} color={tintColor} />
                    ),
                  },
                  defaultNavigationOptions: {
                    headerBackground: <Header />,
                    headerBackImage: () => (
                      <Icon name="chevron-left" size={20} color="#000" />
                    ),
                  },
                }
              ),
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4462',
              inactiveTintColor: '#000',
              style: {
                backgroundColor: '#fff',
                borderTopColor: 'transparent',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signed ? 'App' : 'Sign',
      }
    )
  );
