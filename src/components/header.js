import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>ALBUMS</Text>
        </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#9E9E9E'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
