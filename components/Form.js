import React, { Component } from 'react'
import { Container, Content, Input, Button, CardItem, Text, Icon, Right, Card } from 'native-base';
export default class Form extends Component {
    state = {
        content: "",
    }
    handlingChange = (event) => {
        this.setState({
            content: event.text,
        })
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Icon name='document' />
                            <Input
                                placeholder='please note...'
                                value={this.state.content}
                                onChange={this.handlingChange}
                            />
                            <Right>
                                <Button>
                                    <Icon name='add' />
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}
