import {Modal, View} from 'react-native';
import {CenterView, ExcuseMeVerticallyPXLittle, MiddleSizeText} from '../styles';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
/**
 *
 * @param props
 * isModalVisible, setModalVisible.
 */
export function LoadingModal(props: any) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isModalVisible}
      onRequestClose={() => {
        props.setModalVisible(false);
      }}>
      <CenterView>
        <CenterView
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
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
            marginTop: '50%',
            width: '75%',
            height: '50%',
          }}>
          <ActivityIndicator 
          size={'large'}
          animating={true} color={'green'} />
          <ExcuseMeVerticallyPXLittle/>
          <MiddleSizeText>
            You have {props.seconds + 1} seconds left until your today turns
            into a picture.
          </MiddleSizeText>
        </CenterView>
      </CenterView>
    </Modal>
  );
}
