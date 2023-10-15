/* eslint-disable prettier/prettier */
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {MasterHeaderOption} from './common/MasterHeaderOption';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';
import {setProfileImage} from './data/userSlice';

const logo = './data/logo.png';
/*
props contians ..

*/
function MainPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  function goBack() {
    navigation.goBack();
  }
  function moveForward() {
    // navigation.navigate()
  }
  // useLayoutEffect(() => {
  //   navigation.setOptions(
  //     MasterHeaderOption(
  //       false,
  //       true,
  //       'chevron-left',
  //       '',
  //       goBack,
  //       moveForward,
  //       '',
  //     ),
  //   );
  // }, [navigation]);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1072516140538-7mbt0k5itcdclh3a4o93860nef3jin0i.apps.googleusercontent.com',
      offlineAccess: true,
      scopes: ['profile', 'email'],
    });
  });
  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // setUserInfo(userInfo)
      console.log(userInfo);
      dispatch(setProfileImage(userInfo.user.photo));
      navigation.navigate('WritingPage');
    } catch (error) {
      console.log('error!', error);

      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    } finally {
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        // alignContent: 'center',
        // alignSelf: 'center',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '100%',
            height: 200,
            // borderRadius: 1,
            // borderColor: 'black',
            // borderWidth: 2,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={require(logo)}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          flex: 1,
        }}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {
            signIn();
          }}
          // disabled={this.state.isSigninInProgress}
        />
      </View>
    </View>
  );
}

export default MainPage;
