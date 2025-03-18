import React from 'react';
import {View, Text} from 'react-native';
import Title from '../../components/Title/index';

const Home = () => {

  return (
    <View >
      <Text>Home Screen</Text>
      <Title />
    </View>
  );
};

export default React.memo(Home);
