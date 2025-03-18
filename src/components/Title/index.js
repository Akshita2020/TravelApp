import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styles from './style';

const Title = () => {
  const [state, setState] = useState('');

  const onTextPress = () => {
    setState('updated state');
  };

  return (
    <Text onPress={onTextPress} style={styles.title}>
      {state}
    </Text>
  );
};

export default React.memo(Title);
