import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class HeaderNotificaciones extends Component {
    render() {
        let { titulo, variable } = this.props;
        console.log(titulo);
        return (

            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{titulo}</Title>
                </Body>
                <Right>
                    {/* <Button  onPress={() =>this.props.navigation.navigate('SearchDetail')}  >
                        <Icon name='help' />
                    </Button> */}

                </Right>
            </Header>

        );
    }
}