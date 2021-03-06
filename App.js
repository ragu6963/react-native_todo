import React from 'react'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Container, Header } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import View from './components/View'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }
        return (
            <Container>
                <Header />
                <View />
            </Container>
        );
    }
}
