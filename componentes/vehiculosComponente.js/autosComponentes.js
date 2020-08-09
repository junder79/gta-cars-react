import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Card, CardItem, Text } from 'native-base';
import CustomHeader from '../headerComponente';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
export default class Autos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
    }
  }
  componentDidMount() {
    return fetch('https://gtavehicles.000webhostapp.com/api/api-autos.php')
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
           <CustomHeader titulo="Autos" navigation={this.props.navigation} />
          <ActivityIndicator  size = { 50 } style={{justifyContent:'center'}} />
        </View>
      )
    } else {
      let dataInformacion = this.state.data.map((val, key) => {
       
        return <List >
          <ListItem  onPress={() => this.props.navigation.navigate('DetalleVehiculo',{idVehiculo: val.idvehiculo})} avatar key={key} style={StyleSheet.item}>
            <Left>
              <Thumbnail source={{ uri: val.imagen_vehiculo }} />
            </Left>
            <Body>
              <Text>{val.nombre_vehiculo}</Text>
              <Text note>{val.marca}</Text>
            </Body>
          </ListItem>
        </List>

      });
      return (
        <Container>
          <CustomHeader titulo="Autos" navigation={this.props.navigation} />
          <Content>
            {dataInformacion}
          </Content>
        </Container>
      );
    }
  }
}