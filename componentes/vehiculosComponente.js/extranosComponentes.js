import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Card, CardItem, Text, Button, Toast, Root } from 'native-base';
import CustomHeader from '../headerComponente';
import { imagenes } from '../../src/constantes/imagen';
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
export default class Extranos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
        }
    }
    componentDidMount() {
        return fetch('https://gtavehicles.000webhostapp.com/api/api-extranos.php')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                /* Cambiando los estado de Loading */
                this.setState({
                    isLoading: false,
                    data: responseJson,
                    showToast: false
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
                    <CustomHeader titulo="Vehiculos Extraños" navigation={this.props.navigation} />
                    <ActivityIndicator size={50} style={{ justifyContent: 'center' }} />
                </View>
            )
        } else {
            if (this.state.data == null) {
                return <Root>
                     <CustomHeader titulo="Vehiculos Extraños" navigation={this.props.navigation} />
                    <View style={estilos.container}>
                        <Image source={imagenes.ERROR_IMAGE}></Image>
                        <Text style={estilos.texto}>No pudimos cargar la información</Text>                       
                    </View>
                </Root>
            } else {
                let dataInformacion = this.state.data.map((val, key) => {

                    return <List >
                        <ListItem onPress={() => this.props.navigation.navigate('DetalleVehiculo', { idVehiculo: val.idvehiculo })} avatar key={key} style={StyleSheet.item}>
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
                        <CustomHeader titulo="Extraños" navigation={this.props.navigation} />
                        <Content>
                            {dataInformacion}
                        </Content>
                    </Container>
                );
            }
        }
    }
}

const estilos = StyleSheet.create({
    container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    texto:{
        textAlign:'center',
        fontFamily:'Product Sans Regular'
    },
});