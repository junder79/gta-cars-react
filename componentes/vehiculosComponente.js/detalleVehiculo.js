import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Card, CardItem, Text } from 'native-base';
import CustomHeader from '../headerComponente';
import { StyleSheet, View, ActivityIndicator, ImageBackground, Dimensions, Image, Icon, StatusBar } from 'react-native';
import { imagenes } from '../../src/constantes/imagen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

export default class DetalleVehiculo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
        }
        
    }
    
    componentDidMount() {
        const { navigation } = this.props;
        let idVehiculo = JSON.stringify(navigation.getParam('idVehiculo', 'NO-ID'));
        return fetch('https://gtavehicles.000webhostapp.com/api/getVehicleSpecific.php?idVehiculo=' + idVehiculo)
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
                    <CustomHeader titulo="Aviones" navigation={this.props.navigation} />
                    <ActivityIndicator size={50} style={{ justifyContent: 'center' }} />
                </View>
            )
        } else {

            let dataInformacion = this.state.data.map((val, key) => {

                return <View >
                    <ImageBackground source={imagenes.DETALLE_VEHICULO} style={{ flex: 1, alignItems: 'center' }} resizeMode="stretch">
                        <StatusBar barStyle="light-content" />
                        <View style={estilos.imagenContainer}>
                            <Image source={{ uri: val.imagen_vehiculo }} style={estilos.image}>

                            </Image>

                        </View>
                        <View style={estilos.back_icono}>
                            <Ionicons name="ios-arrow-round-back" color="white" size={35} onPress={() => this.props.navigation.goBack()} />
                        </View>
                    </ImageBackground>
                    <ScrollView style={estilos.footer}>
                        <View style={estilos.status}>
                            <Text style={{ color: 'blue', }}>{val.marca}</Text>
                        </View>
                        <Text  style={estilos.nombreVehiculo}>
                            {val.nombre_vehiculo}
                        </Text>
                        <Text style={estilos.descripcionVehiculo ,{fontFamily: 'Product Sans Regular'}}>
                            {val.descripcion_vehiculo}
                        </Text>
                    </ScrollView>
                </View>

            });

            return (

                <Content style={estilos.container}>
                    {dataInformacion}
                </Content>
            )
        }
    }
}
const height = Dimensions.get("screen").height;
const heightImagen = height * 0.5 * 0.5;
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    footer: {
        flex: 1,
        paddingHorizontal: 40
    },
    /* Imagen de Avatar */
    imagenContainer: {
        width: heightImagen,
        height: heightImagen,
        marginTop: heightImagen / 3,

    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: heightImagen / 2
    },
    back_icono: {
        position: 'absolute',
        left: 0,
        marginTop: 30,
        marginLeft: 15
    },
    status: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 3,
        borderColor: 'blue'
    },
    nombreVehiculo:{
        fontSize:45,
        color:'#4b636e',
        fontWeight:'bold',
        marginTop:5
    },
    descripcionVehiculo:{
        color:'#808e95',
        marginTop:10
    }
});