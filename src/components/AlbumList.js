import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('http://www.mocky.io/v2/5a59e0ff2e0000930d71fadc')
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        return (
            <View>
                <Text> Album listaaaa! </Text>
            </View>
        );
    }
}

export default AlbumList;
