import {ParamListBase, useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack/lib/typescript/src/types';
import {IconButton} from 'react-native-paper';
import {SmallSizeText, themeColorDarkGrey} from '../styles';

//use navigation.setOption(this) before navigate!

/**
 * props
 * isLeftText, isRightText
 *left,right
 leftAction, rightAction
title
 */
export function MasterHeaderOption(isLeftText:boolean,isRightText:boolean, left:string,right:string, leftAction:() => void, rightAction:() => void, title:string): NativeStackNavigationOptions {
  // const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const leftButton = isLeftText ? (
    <SmallSizeText
      onPress={() => {
        // navigation.navigate(leftAction)
        leftAction()
        
      }}>
      {left}
    </SmallSizeText>
  ) : (
    <IconButton
      icon={left}
      // iconColor='white'
      onPress={() => {
        // navigation.navigate(leftAction)
        leftAction()
      }}
    />
  );
  const rightButton = isRightText ? (
    <SmallSizeText
      onPress={() => {
        // navigation.navigate(rightAction)
        rightAction()
      }}>
      {right}
    </SmallSizeText>
  ) : (
    <IconButton
      icon={right}
      // iconColor='white'
      onPress={() => {
        // navigation.navigate(rightAction)
        rightAction()
      }}
    />
  );

  return {
    animation: 'none',
    headerShown: true,
    headerTitle: title,
    headerTitleAlign: 'center',
    headerLeft: () => leftButton,
    headerRight: () => rightButton,
    // headerStyle:{backgroundColor:'transparent'},
    headerTransparent:true,
    headerTitleStyle:{color:'black'}
    
  };
}