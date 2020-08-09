import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import CustomHeader from './headerComponente';
import { Container, Text, Header, Left, Content, Card, CardItem, Thumbnail, Body, Right, Button, Icon, Title } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { imagenes } from '../src/constantes/imagen';


export default class Feed extends React.Component {
  render() {
    return (
      <Container>
        {/* <CustomHeader titulo="Inicio" /> */}
        <Text style={{ fontFamily: 'Product Sans Regular', color: "grey", fontSize: 30, marginLeft: 10, marginTop: 10 }}>Categorias</Text>
        <Content padder  >

          <Card style={{ borderRadius: 50 }}  >

            <ImageBackground source={imagenes.AVIONES_BANNER} style={estilos.image}>
              <CardItem style={{ backgroundColor: 'transparent' }} button onPress={() => this.props.navigation.navigate('Aviones')} >
                <Body>
                  <Text style={estilos.text}>
                    Aviones
                </Text>
                </Body>
              </CardItem>
            </ImageBackground>

          </Card>
          <Card style={{ borderRadius: 15 }}  >

            <ImageBackground source={imagenes.AUTOS_BANNER} style={estilos.image}>
              <CardItem style={{ backgroundColor: 'transparent' }} button onPress={() => this.props.navigation.navigate('Autos')} >
                <Body>
                  <Text style={estilos.text}>
                    Autos
                </Text>
                </Body>
              </CardItem>
            </ImageBackground>

          </Card>
          <Card style={{ borderRadius: 15 }}  >

            <ImageBackground source={imagenes.HELICOPTERO_BANNER} style={estilos.image}>
              <CardItem style={{ backgroundColor: 'transparent' }} button onPress={() => this.props.navigation.navigate('Helicoptero')} >
                <Body>
                  <Text style={estilos.text}>
                    Helicópteros
                   </Text>
                </Body>
              </CardItem>
            </ImageBackground>

          </Card>
          <Card style={{ borderRadius: 15 }}  >

            <ImageBackground source={imagenes.EXTRANO_BANNER} style={estilos.image}>
              <CardItem style={{ backgroundColor: 'transparent' }} button onPress={() => this.props.navigation.navigate('Extrano')} >
                <Body>
                  <Text style={estilos.text}>
                    Vehiculos Extraños
       </Text>
                </Body>
              </CardItem>
            </ImageBackground>

          </Card>
          <Card style={{ borderRadius: 15 }}  >

            <ImageBackground source={imagenes.MOTO_BANNER} style={estilos.image}>
              <CardItem style={{ backgroundColor: 'transparent' }} button onPress={() => this.props.navigation.navigate('Motos')} >
                <Body>
                  <Text style={estilos.text}>
                    Motocicletas
       </Text>
                </Body>
              </CardItem>
            </ImageBackground>

          </Card>
          <Card style={{ borderRadius: 15 }}  >

            <ImageBackground source={imagenes.MOTO_BANNER} style={estilos.image}>
              <CardItem style={{ backgroundColor: 'transparent' }} button onPress={() => this.props.navigation.navigate('Botes')} >
                <Body>
                  <Text style={estilos.text}>
                    Botes
</Text>
                </Body>
              </CardItem>
            </ImageBackground>

          </Card>
          {/* <Button light onPress={() =>this.props.navigation.navigate('SearchDetail') }>
            <Text>GO TO SEARCH DETAIL</Text>
          </Button> */}
        </Content>
      </Container >
    );
  }
}

const estilos = StyleSheet.create({
  card: {
    borderRadius: 15,

    // colors={['#4c669f', '#3b5998', '#192f6a']}

  }, linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  imagenHeader: {
    flex: 1,

    // alignItems: 'center',
    width: '100%',
    height: "30%"

  }, container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 15,
    height: 80
  },
  text: {
    color: "black",
    fontSize: 20,
    fontFamily: 'Product Sans Regular',
    marginLeft: 5
  }
});