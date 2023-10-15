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
import {MasterHeaderOption} from '../common/MasterHeaderOption';
import {
  CenterView,
  ContainedImage,
  ImageContainer,
  LargeImageContainer,
  LargeSizeText,
  UltraSizeText,
} from '../styles';
import {LoadingModal} from './LoadingModal';
import {BigImageModal} from '../common/BigImageModal';
import { CurrentDate } from '../common/DateManager';

/*
props contians ..
texts: string[]
*/
function ResultPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  function goBack() {
    navigation.goBack();
  }
  function moveForward() {
    navigation.navigate('MonthlyListPage')
  }
  useLayoutEffect(() => {
    navigation.setOptions(
      MasterHeaderOption(
        false,
        false,
        'chevron-left',
        'folder-multiple-image',
        goBack,
        moveForward,
        '',
      ),
    );
  }, [navigation]);
  const [image, setImage] = useState<string>(
    'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
  );
  function regenerate() {
    setModalVisible(true);
  }

  const [seconds, setSeconds] = useState(5);
  const [isModalVisible, setModalVisible] = useState(false);

  const [isBigImage, setIsBigImage] = useState<boolean>(false);
  useEffect(() => {
    if (isModalVisible) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          console.log('count down', seconds);

          setSeconds(seconds - 1);
        } else {
          setModalVisible(false);
          setImage(
            'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
          );
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds, isModalVisible]);

  const texts = props.route.params.texts;
  console.log("texts", texts);
  
  return (
    <CenterView
      style={{
        flex: 1,
      }}>
      <LoadingModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        seconds={seconds}
      />
      <BigImageModal
        isModalVisible={isBigImage}
        setModalVisible={setIsBigImage}
        image={image}
        texts= {texts}
      />
      <UltraSizeText
        style={{
          flex: 1,
        }}>
        {CurrentDate()}
      </UltraSizeText>
      <TouchableOpacity
      onPress={()=>{
        setIsBigImage(true)
      }}
      >
        <LargeImageContainer>
          <ContainedImage
            source={{
              uri: image,
            }}
          />
        </LargeImageContainer>
      </TouchableOpacity>
      <CenterView
        style={{
          flex: 1,
        }}>
        <TouchableOpacity
          onPress={() => {
            regenerate();
          }}
          style={{
            backgroundColor: '#cccccc',
            padding: 15,
            margin: 5,
            borderRadius: 25,
          }}>
          <LargeSizeText>REGENERATE</LargeSizeText>
        </TouchableOpacity>
      </CenterView>
    </CenterView>
  );
}

export default ResultPage;
