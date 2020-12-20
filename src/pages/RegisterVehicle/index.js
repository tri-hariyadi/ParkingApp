import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Keyboard, Image } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { showMessage } from "react-native-flash-message";
import { Field, reduxForm } from 'redux-form';
import { TextField, Header, Gap, Button } from '../../components';
import { colors } from '../../utils';
import { RegisterVehicleUser } from '../../actions'
import Styles from './style';

const RegisterVehicle = props => {
  const a = React.useRef();
  const b = React.useRef();
  const c = React.useRef();
  const d = React.useRef();
  const e = React.useRef();
  const f = React.useRef();
  const typeVehicle = props.route.params;
  const scrollViewRef = React.useRef();
  const [isOpen, setIsOpen] = useState(false);
  const keyboardShowListener = React.useRef(null);
  const keyboardHideListener = React.useRef(null);
  const [photo, setPhoto] = useState();
  const [photoCar, setPhotoCar] = useState(false);
  const dispatch = useDispatch();
  const {
    registerVehicleData,
    registerVehicleLoading,
    registerVehicleError,
  } = useSelector(state => ({
    registerVehicleData: state.VehicleReducer.registerVehicleData,
    registerVehicleLoading: state.VehicleReducer.registerVehicleLoading,
    registerVehicleError: state.VehicleReducer.registerVehicleError,
  }), shallowEqual);

  useEffect(() => {
    // changeNavigationBarColor(colors.colorVariables.whiteSmoke3, true);
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () =>
      setIsOpen(true),
    );
    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () =>
      setIsOpen(false),
    );

    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    }
  }, []);

  const getImage = uploadParam => {
    const option = {
      title: 'Pilih Photo',
      takePhotoButtonTitle: "Take a picture",
      // chooseFromLibraryButtonTitle: 'Pilih dari Galery',
      quality: 0.5,
      maxWidth: 200,
      maxWidth: 200
    }
    ImagePicker.launchCamera(option, (response) => {
      if (response.didCancel) {
        showMessage({
          message: 'Cancelled pick image',
          type: 'warning',
          duration: 3200
        });
      } else if (response.error) {
        showMessage({
          message: 'Permission denied, please allow this aplication to access your files',
          type: 'danger',
          // backgroundColor: colors.error,
          // color: colors.white
        });
      } else {
        const source = { uri: response.uri };
        if (uploadParam === 'motoCycle') {
          setPhoto(source);
        } else if (uploadParam === 'car') {
          setPhotoCar(source)
        }
      }
    });
  }

  const onClick = (data) => {
    console.log(data);
    console.log(photo);
    dispatch(RegisterVehicleUser(
      data, 
      '5fdc0975ba433518af3b3114', 
      typeVehicle === 'MC' ? 'Motor Cycle' : 'Car', 
      typeVehicle === 'MC' ? photo : photoCar
    ));
  }

  return (
    <>
      <Header
        label='Register Vehicle'
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Styles.container}
      >
        <View style={Styles.wrapperCheckSuccess}>
          <Animatable.View
            animation="tada"
            easing="ease-in"
            duration={1000}
            iterationDelay={900}
            iterationCount='infinite'
          >
            <View style={Styles.wrapperCheckSuccess}>
              <Icon
                name='drive-eta'
                size={responsiveFontSize(20)}
                color={colors.colorVariables.greenLighten2}
              />
            </View>
          </Animatable.View>
          {/* <Text style={Styles.textSuccess}>Yeay !</Text> */}
          <Text style={Styles.textSuccess}>Register Vehicle</Text>
          <Gap height={2} />
          <Text style={Styles.textAttention}>Please register your vehicle before booking a parking area</Text>
        </View>
        <Gap height={2} />
        <View>
          {typeVehicle === 'MC' ? 
            <>
              <Text style={Styles.textSection}>Have a Motorcycle</Text>
              <Gap height={2} />
              <Field
                externalRef={a}
                name='motoName'
                placeholder='Enter Motorcycle name'
                iconName='two-wheeler'
                component={TextField}
                returnKeyType='next'
                blurOnSubmit={false}
                onSubmitEditing={() => b.current.focus()}
              />
              <Gap height={3} />
              <Field
                externalRef={b}
                name='license'
                placeholder='Enter license plate'
                iconName='call-to-action'
                component={TextField}
                returnKeyType='next'
                blurOnSubmit={false}
                onSubmitEditing={() => c.current.focus()}
              />
              <Gap height={3} />
              <Field
                externalRef={c}
                name='chassis'
                placeholder='Enter number Chassis'
                iconName='bike-scooter'
                component={TextField}
                blurOnSubmit={false}
              />
              <Gap height={3} />
              <Text style={Styles.textAttention}>Upload photo vehicle registration certificate</Text>
              <Gap height={2} />
              <TouchableOpacity
                onPress={() => getImage('motoCycle')}
                style={Styles.wrapperUploadImage}>
                {!photo ?
                  <Icon
                    name='add-a-photo'
                    size={responsiveFontSize(10)}
                    color={colors.colorVariables.indigo1} />
                  :
                  <Image
                    source={photo}
                    style={Styles.uploadImage}
                    resizeMode='cover'
                    resizeMethod='resize' />
                }
              </TouchableOpacity>
            </>
            :
            <>
              <Text style={Styles.textSection}>Have a Car</Text>
              <Gap height={2} />
              <Field
                externalRef={d}
                name='carName'
                placeholder='Enter Car name'
                iconName='directions-car'
                component={TextField}
                returnKeyType='next'
                blurOnSubmit={false}
                onSubmitEditing={() => e.current.focus()}
              />
              <Gap height={3} />
              <Field
                externalRef={e}
                name='carLicense'
                placeholder='Enter license plate'
                iconName='call-to-action'
                component={TextField}
                returnKeyType='next'
                blurOnSubmit={false}
                onSubmitEditing={() => f.current.focus()}
              />
              <Gap height={3} />
              <Field
                externalRef={f}
                name='carChassis'
                placeholder='Enter number Chassis'
                iconName='bike-scooter'
                autoCapitalize='none'
                component={TextField}
                blurOnSubmit={false}
              />
              <Gap height={3} />
              <Text style={Styles.textAttention}>Upload photo vehicle registration certificate</Text>
              <Gap height={2} />
              <TouchableOpacity
                onPress={() => getImage('car')}
                style={Styles.wrapperUploadImage}>
                {!photoCar ?
                  <Icon
                    name='add-a-photo'
                    size={responsiveFontSize(10)}
                    color={colors.colorVariables.indigo1} />
                  :
                  <Image
                    source={photoCar}
                    style={Styles.uploadImage}
                    resizeMode='cover'
                    resizeMethod='resize' />
                }
              </TouchableOpacity>
            </>
          }
          <Gap height={4} />
          <Button
            type='secondary'
            onPress={props.handleSubmit(onClick)}
            textBold
          >
            Register My Vehicle
          </Button>
          <Gap height={4} />
        </View>
      </ScrollView>
    </>
  )
}

export default reduxForm({
  form: 'registerVehicle',
  enableReinitialize: true
})(RegisterVehicle);
