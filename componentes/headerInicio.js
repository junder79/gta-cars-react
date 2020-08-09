import React from 'react';
import { View, Image, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { imagenes } from '../src/constantes/imagen';
import CustomHeader from './headerComponente';
import { Container, Text, Header, Left, Content, Card, CardItem, Thumbnail, Body, Right, Button, Icon, Title } from 'native-base';
export default class Feed extends React.Component {
  render() {

    return (
      <View style={estilos.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={estilos.header}>
          <ImageBackground source={imagenes.HEADER_INICIO} style={estilos.imagenHeader}>
          <Text style={{fontSize:50,marginTop:70,fontFamily:'BalooTammudu2-Medium',color:'white'}}>GTA Cars</Text>
          </ImageBackground>
        </View>
        <Text>Categorias</Text>
      </View>

    );
  }
}

const estilos = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'rgb(131,58,180)',

  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    
  },
  imagenHeader: {
    flex: 1,

    alignItems: 'center',
    width: '100%',
    height:"30%"
    
  }
});