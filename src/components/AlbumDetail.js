import React from 'react';
import { View, Text } from 'react-native';

const AbumDetail = props => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    );
}

export default AbumDetail;
