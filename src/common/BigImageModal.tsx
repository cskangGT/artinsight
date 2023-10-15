import {Modal, Text, View} from 'react-native';
import {
  CenterText,
  CenterView,
  ContainedImage,
  ExcuseMeVerticallyPXLittle,
  LargeImageContainer,
  LargeSizeText,
  MiddleSizeText,
  UltraSizeText,
  WIDTH,
} from '../styles';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
// @ts-ignore
import FlipCard from 'react-native-flip-card';
import React from 'react';
/**
 *
 * @param props
 * isModalVisible, setModalVisible.
 * image uri:string
 * texts
 */
export function BigImageModal(props: any) {
  console.log('leav', props.texts);
  const content = props.texts;
  return (
    <Modal
      //   animationType="slide"
      transparent={true}
      visible={props.isModalVisible}
      onRequestClose={() => {
        props.setModalVisible(false);
      }}>
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}>
        <CenterView>
          <LargeImageContainer
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              // padding: 35,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              // borderColor: 'red',
              // borderWidth: 3,
              marginTop: '25%',
              width: WIDTH,
              height: WIDTH,
            }}>
            <ContainedImage source={{uri: props.image}} />
          </LargeImageContainer>
        </CenterView>
        <CenterView>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              // padding: 35,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              // borderColor: 'red',
              // borderWidth: 3,
              marginTop: '25%',
              width: WIDTH,
              height: WIDTH,
              padding:'15%'
            }}>
            {content.map((text: string, index: number) => (
              <UltraSizeText
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  flex:1
                }}
                key={index}>
                {text}
              </UltraSizeText>
            ))}
          </View>
        </CenterView>
      </FlipCard>
    </Modal>
  );
}
