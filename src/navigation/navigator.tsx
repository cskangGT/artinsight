/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from '../MainPage';
import WritingPage from '../Generating/WritingPage';
import ResultPage from '../Generating/ResultPage';
import MonthlyListPage from '../Diary/MonthlyListPage';
const RootStack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      {/* <RootStack.Navigator> */}
      <RootStack.Navigator initialRouteName="MainPage">
        <RootStack.Screen
          name="MainPage"
          component={MainPage}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="WritingPage" component={WritingPage} />
        <RootStack.Screen name="ResultPage" component={ResultPage} />
        <RootStack.Screen name="MonthlyListPage" component={MonthlyListPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
