import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Text, Icon, Right, View, CheckBox, Body, ListItem, Button, Input } from 'native-base';
export default class Note extends Component {
    render() {
        return (
            <View style={styles.view}>
                <ListItem>
                    <CheckBox checked={false} />
                    <Body>
                        <Text>{this.props.note}</Text>
                    </Body>
                    <Right>
                        <Button transparent small>
                            <Icon name="create" />
                        </Button>
                    </Right>
                    <Right >
                        <Button danger transparent small>
                            <Icon name="trash" />
                        </Button>
                    </Right>
                </ListItem>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view: {
        marginBottom: 20,
    },
    card: {
        paddingTop: 10,
        paddingBottom: 10,
    },
})
