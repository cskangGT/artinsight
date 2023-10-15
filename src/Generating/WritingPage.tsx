/* eslint-disable prettier/prettier */
import {
  NavigationContext,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
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
  Modal,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {MasterHeaderOption} from '../common/MasterHeaderOption';
import {
  CenterView,
  HorizontalAlignView,
  LargeSizeText,
  MiddleSizeText,
} from '../styles';
import {IconButton} from 'react-native-paper';
import {LoadingModal} from './LoadingModal';
import {useSelector} from 'react-redux';
import {RootState} from '../app/store';

/*
props contians ..
profileImage: string
*/
function WritingPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  function goBack() {
    navigation.goBack();
  }
  function moveForward() {
    // navigation.navigate()
  }
  //   const profileImage = props.route.params.profileImage;
  const profileImage = useSelector(
    (state: RootState) => state.user.profileImage,
  );

  useLayoutEffect(() => {
    navigation.setOptions(
      MasterHeaderOption(
        false,
        true,
        'chevron-left',
        '',
        goBack,
        moveForward,
        '',
      ),
    );
  }, [navigation]);
  const [texts, setTexts] = useState<string[]>(['', '', '', '', '']);

  const [currNum, setCurrNum] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const [text, setText] = useState<string>(texts[index]);
  function addText(t: string) {
    let copy = [...texts];
    copy[index] = t;
    setTexts(copy);
  }
  function prev() {
    if (text.length == 0) {
      return;
    }
    if (index > 0) {
      addText(text);
      setIndex(index - 1);
      setText(texts[index - 1]);
      setIndex(index - 1);
    }
  }
  function next() {
    if (text.length == 4) {
      return;
    }
    if (index < 4) {
      addText(text);
      setIndex(index + 1);
      setText(texts[index + 1]);
      setIndex(index + 1);
    }
  }
  const [isModalVisible, setModalVisible] = useState(false);
  function goGenerate() {
    addText(text);
    let copy = [...texts];
    copy[index] = text;
    console.log('generate keywords', copy);
    for (let i = 0; i < 5; i++) {
      if (copy[i].length == 0) {
        console.log('not valid', copy[i], '  at index', i);

        return;
      }
    }

    setModalVisible(true);
  }
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    if (isModalVisible) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          console.log('count down', seconds);

          setSeconds(seconds - 1);
        } else {
          goResult();
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds, isModalVisible]);
  function goResult() {
    setSeconds(5);
    setModalVisible(false);
    navigation.navigate('ResultPage', {texts: texts});
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        // alignContent: 'center',
        // alignSelf: 'center',
      }}>
      <LoadingModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        seconds={seconds}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: 200,
            height: 200,
            borderRadius: 50,
            overflow: 'hidden',
            // borderColor: 'black',
            // borderWidth: 2,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={{uri: profileImage}}
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
        <CenterView>
          <LargeSizeText
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: 'black',
            }}>
            How was your today?
          </LargeSizeText>
          <HorizontalAlignView>
            <IconButton
              icon={'chevron-left'}
              size={50}
              onPress={() => {
                prev();
              }}
            />
            <TextInput
              value={text}
              onChangeText={(t: string) => {
                setText(t);
              }}
              onSubmitEditing={t => {
                addText(text);
              }}
              placeholder="word"
              style={{fontSize: 30}}
            />
            <IconButton
              icon={'chevron-right'}
              size={50}
              onPress={() => {
                next();
              }}
            />
          </HorizontalAlignView>
          <MiddleSizeText>{index + 1}/5</MiddleSizeText>

          <CenterView>
            <TouchableOpacity
              onPress={() => {
                goGenerate();
              }}
              style={{
                backgroundColor: '#cccccc',
                padding: 15,
                margin: 5,
                borderRadius: 25,
              }}>
              <LargeSizeText>GENERATE</LargeSizeText>
            </TouchableOpacity>
          </CenterView>
        </CenterView>
      </View>
    </View>
  );
}

export default WritingPage;
