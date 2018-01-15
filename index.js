import { AppRegistry, View } from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Records'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('lealbums', () => App);
