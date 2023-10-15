import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const RootStack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Entry">
                <RootStack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
