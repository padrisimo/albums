import React from 'react';
import { View } from 'react-native';

export default (props) => {
  return (
    <View style={styles.containerStyle}>
      { props.children }
    </View>
  )
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        marginBottom: 6,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};