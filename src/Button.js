import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => (
    <TouchableOpacity onPress={onPress} style={styles.touchableStyle}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
  const styles = {
    touchableStyle: {
      padding: 10,
      margin: 10,
      width: 150,
      marginTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffff',
      fontSize: 20,
      backgroundColor: '#00b894',
      borderRadius: 5,
      alignSelf: 'center'
    }

  };

export default Button;
