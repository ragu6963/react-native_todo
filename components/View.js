import React, { Component } from 'react'
import { Container, Grid, Row } from 'native-base';
import { StyleSheet } from 'react-native';
import Form from './Form';
import Index from './Index';

export default class View extends Component {
    state = {
        notes: [
            "Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1", "Test2", "Test3", "Test1", "Test2", "Test3", "Test1", "Test2", "Test3", "Test1", "Test2", "Test3",
            "Test1", "Test2", "Test3", "Test1", "Test2", "Test3", "Test1", "Test2", "Test3", "Test1", "Test2", "Test3",
        ],
    }
    render() {
        return (
            <Container style={styles.container} >
                <Grid>
                    <Row size={15}>
                        <Form />
                    </Row>
                    <Row size={85}>
                        <Index notes={this.state.notes} />
                    </Row>
                </Grid >
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});