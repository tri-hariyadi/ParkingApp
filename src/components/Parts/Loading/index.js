import React from 'react';
import { View, Text, Image, Modal } from 'react-native';
import { styles } from './style';
import { ILSpinner } from '../../../assets';

const Loading = ({ visible, onRequestClose }) => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <Image source={ILSpinner} style={styles.image} />
          <Text style={styles.text}>Loading...</Text>
        </View>
      </View>
    </Modal>
  )
}

export default Loading
