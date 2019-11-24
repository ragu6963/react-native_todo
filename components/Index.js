import React, { Component, } from 'react'
import { Container } from 'native-base';
import { ScrollView } from 'react-native';
import Note from './Note';

export default class Form extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    {
                        this.props.notes.map((note, index) => {
                            return (
                                <Note key={index} note={note} />
                            )
                        })
                    }
                </ScrollView>
            </Container>
        )
    }
}
