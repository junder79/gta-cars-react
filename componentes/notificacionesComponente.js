import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import HeaderNotificaciones from './headerNotificaciones';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Card, CardItem, Text, Button, Icon } from 'native-base';
import CustomHeader from './headerComponente';
import { imagenes } from '../src/constantes/imagen';
export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
    }
  }
  componentDidMount() {
    return fetch('https://gtavehicles.000webhostapp.com/api/api-notificaciones.php')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        /* Cambiando los estado de Loading */
        this.setState({
          isLoading: false,
          data: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }
  render() {

    if (this.state.isLoading) {
      return (
        <View>
          <CustomHeader titulo="Notificaciones" />
          <ActivityIndicator size={50} style={{ justifyContent: 'center' }} />
        </View>
      )
    } else {
      let dataInformacion = this.state.data.map((val, key) => {
        return <Card>
          <CardItem>
            <Left>
              <Thumbnail source={imagenes.ICON_NOTIFICATION} />
              <Body>
                <Text>{val.mensaje}</Text>
                <Text note>{val.descripcion}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: val.imagen_url }} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
        </Card>
      });
      return (
        <Container>
          <CustomHeader titulo="Notificaciones"  />
          <Content>
            {dataInformacion}
          </Content>
        </Container>
      );

    }
  }
}

const estilos = StyleSheet.create({
  tituloComponente: {
    fontSize: 30,
    alignItems: 'center',
  },
  textoNoHayData: {
    fontFamily: 'Product Sans Regular',
    fontSize: 18
  }, image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 15,
    height: 80
  },
}); 