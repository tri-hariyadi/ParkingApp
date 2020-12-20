import React from 'react';
import * as Animatable from 'react-native-animatable';
import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import { colors } from '../../../utils';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Gap from '../Gap';

const AlertAwesome = ({
  showAlert,
  showProgress,
  title,
  message,
  showCancelButton,
  showConfirmButton,
  cancelText,
  confirmText,
  showImageLoading,
  onDismiss,
  onConfirmPressed,
  onCancelPressed,
  type,
  dangerMode
}) => {
  return (
    <AwesomeAlert
      show={showAlert}
      useNativeDriver={false}
      showProgress={showProgress}
      progressSize={70}
      progressColor='#000'
      title={title}
      message={message}
      closeOnTouchOutside={showImageLoading ? false : true}
      closeOnHardwareBackPress={false}
      showCancelButton={showCancelButton}
      showConfirmButton={showConfirmButton}
      cancelText={cancelText}
      confirmText={confirmText}
      confirmButtonColor={dangerMode ? colors.colorVariables.danger : colors.colorVariables.blue1}
      cancelButtonColor={showConfirmButton ? colors.colorVariables.whiteSmoke2 : dangerMode ? colors.colorVariables.danger : colors.colorVariables.whiteSmoke2}
      customView={
        <Animatable.View
          animation="rubberBand"
          easing="ease-in-out"
          duration={1000}
          delay={200}>
          <Icon
            name={
              type === 'success' ?
                'check-circle-outline'
                :
                type === 'warning' ?
                  'error-outline'
                  :
                  type === 'danger' ?
                  'cancel'
                  :
                  'cancel'
            }
            size={responsiveFontSize(9)}
            color={
              type === 'success' ?
                colors.colorVariables.success
                :
                type === 'warning' ?
                  colors.colorVariables.warning
                  :
                  type === 'danger' ?
                    colors.colorVariables.danger
                    :
                    colors.colorVariables.indigo1
            }
            style={styles.alertImageStyle}
          />
        </Animatable.View>
      }
      titleStyle={styles.alertTitleStyle}
      messageStyle={styles.messageStyle}
      confirmButtonStyle={styles.alertButtonStyle}
      cancelButtonStyle={styles.alertButtonStyle}
      contentContainerStyle={styles.contentContainerStyle(showImageLoading)}
      onDismiss={onDismiss}
      onCancelPressed={onCancelPressed}
      onConfirmPressed={onConfirmPressed}
    />
  )
}

export default AlertAwesome;
