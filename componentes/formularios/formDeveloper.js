import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import HeaderNotificaciones from '../headerNotificaciones';
export default class FomularioDesarrollado extends Component {
    constructor() {
        super();
        this.state = {
            correo: '',
            nombreUsuario: '',
            apellidousuario: '',
            mensajeproblema: '',
        }
    }

    actualizarFormulario(valor, nombreCampo) {
        if (nombreCampo == 'correo') {
            this.setState({
                correo: valor,
            })
        } else if (nombreCampo == 'nombreUsuario') {
            this.setState({
                nombreUsuario: valor,
            })
        } else if (nombreCampo == 'apellidoUsuario') {
            this.setState({
                apellidousuario: valor
            })
        } else {
            this.setState({
                mensajeproblema: valor
            })
        }
    }
    render() {
        return (
            <Container>
                <HeaderNotificaciones titulo="Comentarios" ></HeaderNotificaciones>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Correo" onChangeText={(correo) => this.actualizarFormulario(correo, 'correo')} />
                        </Item>
                        <Item >
                            <Input placeholder="Nombre" onChangeText={(nombre) => this.actualizarFormulario(nombre, 'nombreUsuario')} />
                        </Item>
                        <Item >
                            <Input placeholder="Apellido" onChangeText={(apellido) => this.actualizarFormulario(apellido, 'apellidoUsuario')} />
                        </Item>
                        <Item >
                            <Input placeholder="Mensaje" onChangeText={(mensaje) => this.actualizarFormulario(mensaje, 'mensajeProblema')} />
                        </Item>
                    </Form>
                    <Button onPress={this.enviarFomulario} rounded primary><Text> Enviar</Text></Button>
                    <Text>{this.state.correo}</Text>
                </Content>

            </Container>
        );
    }
    enviarFomulario = async () => {
        let formData = new FormData();
        formData.append('correoUsuario', this.state.correo)
        formData.append('nombreUsuario', this.state.nombreUsuario)
        formData.append('apellidoUsuario', this.state.apellidousuario)
        formData.append('mensajeProblema', this.state.mensajeproblema)
        // this.setState({ text: 'hossla' })
        fetch('https://gtavehicles.000webhostapp.com/api/api-insertar-problema.php', {
            method: 'POST',
            body: formData
        }).then((response) => response.json())
            .then((responseData) => {
                if (JSON.stringify(responseData) == 1) {
                    this.props.navigation.navigate('Search');
                } else {
                        
                }
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )
            })
            .done();
    }
}