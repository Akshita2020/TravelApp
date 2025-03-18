import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Homes from './src/screens/Home';
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        backgroundColor: '#fff',
      }}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Homes />
      </View>
    </View>
  );
};

export default Home;
