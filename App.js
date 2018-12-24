/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, StatusBar, Alert,CameraRoll , ToastAndroid } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "qr",
      ap: '',
      nom: '',
      direc: ''
    };
  }




  render() {

    const value = this.state.text

    return (

      <ScrollView style={{ backgroundColor: '#20445a' }} showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor='#1b3c4f' barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.containerForm}>

            <View style={{ alignItems: 'center' }}>
              <Icon name="user-circle" size={30} style={{ color: '#20445a', marginRight: 10 }} />
              <Text style={{ color: '#20445a', fontSize: 24 }}>
                Registre sus datos
              </Text>
            </View>

            <View style={{ flexDirection: 'row', borderColor: 'gray', borderBottomWidth: 1, marginVertical: 10, marginHorizontal: 10 }}>
              <View style={{
                width: 40,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Icon
                  name="user"
                  size={18}
                />
              </View>

              <TextInput
                placeholderTextColor='#999999'
                underlineColorAndroid="transparent"
                placeholder="Apellidos"
                style={{ flex: 1, fontSize: 14, color: '#1b3c4f' }}
                onChangeText={(text) => this.setState({ ap: text })}
              />
            </View>

            <View style={{ flexDirection: 'row', borderColor: 'gray', borderBottomWidth: 1, marginVertical: 10, marginHorizontal: 10 }}>
              <View style={{
                width: 40,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Icon
                  name="user"
                  size={18}
                />
              </View>
              <TextInput
                placeholderTextColor='#999999'
                underlineColorAndroid="transparent"
                placeholder="Nombres"
                style={{ flex: 1, fontSize: 14, color: '#1b3c4f' }}
                onChangeText={(text) => this.setState({ nom: text })}
              />
            </View>

            <View style={{ flexDirection: 'row', borderColor: 'gray', borderBottomWidth: 1, marginVertical: 10, marginHorizontal: 10 }}>
              <View style={{
                width: 40,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Icon
                  name="address-card"
                  size={18}
                />
              </View>
              <TextInput
                placeholderTextColor='#999999'
                underlineColorAndroid="transparent"
                placeholder="Dirección"
                style={{ flex: 1, fontSize: 14, color: '#1b3c4f' }}
                onChangeText={(text) => this.setState({ direc: text })}
              />
            </View>

            <View style={{ alignItems: 'center', padding: 20 }}>
              <Text style={{ fontSize: 14, color: '#20445a', marginBottom: 10 }}>Codigo QR</Text>
              <QRCode
                value={value}
                size={150}
                color='#1b3c4f'
                backgroundColor='white'
              />
            </View>

            <Button
              title="Generar"
              color="#ee622f"
              onPress={() => {
                if (!this.state.ap.length != 0) {
                  Alert.alert(
                    'Advertencia',
                    'Ingrese sus apellidos, por favor',
                    [
                      { text: 'OK', onPress: () => console.log('OK Pressed') },
                      null, null
                    ]
                  )
                } else if (!this.state.nom.length != 0) {
                  Alert.alert(
                    'Advertencia',
                    'Ingrese sus nombres, por favor',
                    [
                      { text: 'OK', onPress: () => console.log('OK Pressed') },
                      null, null
                    ]
                  )
                } else if (!this.state.direc.length != 0) {
                  Alert.alert(
                    'Advertencia',
                    'Ingrese la dirección de vivienda, por favor',
                    [
                      { text: 'OK', onPress: () => console.log('OK Pressed') },
                      null, null
                    ]
                  )
                } else {
                  Alert.alert("Información", "Se genero su código QR, ahora puedes escanearlo.")
                  this.setState({ text: this.state.ap + " " + this.state.nom + " " + this.state.direc })
                }



              }}>
            </Button>

          </View>
        </View>
      </ScrollView >



    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#20445a',
    alignItems: 'center'
  },
  containerForm: {
    width: '90%',
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 10,
  }
  ,
  btnLogin: {
    height: 45,
    backgroundColor: '#ee622f',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10
  }
});
