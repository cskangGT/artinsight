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
  ExcuseMeVerticallyMedium,
  ExcuseMeVerticallyPXLittle,
  ExcuseMeVerticallyPXMedium,
  ImageContainer,
  LargeImageContainer,
  LargeSizeText,
  UltraSizeText,
} from '../styles';
import {CurrentDate, getCurrentMonthAbbreviation} from '../common/DateManager';
import {BigImageModal} from '../common/BigImageModal';

/*
props contians ..

*/
const images = [
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
  {
    image:
      'https://media.discordapp.net/attachments/1016394655346208840/1157880155293880340/20230928_195644.jpg?ex=653dcfed&is=652b5aed&hm=66a301df608c7193f6282a36bde55d60f64d91317e08a6948f9362c13eec53fd&=&width=502&height=670',
    texts: ['freedom', 'wisdom', 'love', 'school', 'youth'],
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1016394655346208840/1162973598072455218/20231011_111557.jpg?ex=653de290&is=652b6d90&hm=1efc2e917fe4be01eeeca48af80e24050d0d76cf2f041dd80b5b301c1dcf89ef&',
    texts: ['memory', 'hackGT', 'Georgia Tech', 'develop', 'Google'],
  },
];
function MonthlyListPage(props: any): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  function goBack() {
    navigation.goBack();
  }
  function writeAnother() {
    // navigation.navigate('')
    navigation.navigate('WritingPage');
  }
  useLayoutEffect(() => {
    navigation.setOptions(
      MasterHeaderOption(
        false,
        false,
        'chevron-left',
        'pencil',
        goBack,
        writeAnother,
        getCurrentMonthAbbreviation(),
      ),
    );
  }, [navigation]);

  const [isBigImage, setIsBigImage] = useState<boolean>(false);
  const [selectedTexts, setSelectedTexts] = useState<string[]>([
    'freedom',
    'wisdom',
    'love',
    'school',
    'youth',
  ]);
  const [selectedImage, setSelectedImage] = useState<string>('');

  return (
    <ScrollView>
      <ExcuseMeVerticallyPXMedium
        style={{
          flex: 0.1,
        }}
      />
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          flex: 1,
          alignSelf: 'center',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <BigImageModal
          isModalVisible={isBigImage}
          setModalVisible={setIsBigImage}
          image={selectedImage}
          texts={selectedTexts}
        />
        {images.map((image, index) => (
          <TouchableOpacity
            style={{
              width: '30%',
              margin: 3,
            }}
            key={index}
            onPress={() => {
              setSelectedImage(image.image);
              setSelectedTexts(image.texts);
              setIsBigImage(true);
            }}>
            <ImageContainer
              style={{
                width: '100%',
              }}>
              <ContainedImage
                source={{
                  uri: image.image,
                }}
              />
            </ImageContainer>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export default MonthlyListPage;
