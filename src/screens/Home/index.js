import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import TitleClass from '../../components/Title/classComponent';
import Title from '../../components/Title/index';

const Home = () => {
  const [title, setTitle] = useState('My First Component');

  useEffect(() => {
    setTimeout(() => {
      setTitle('UPDATED PROP TEXT');
    }, 3000);
  }, []);
  return (
    <View >
      <Text>Home Screen</Text>
      <Title />
      <TitleClass text="Class component" />
    </View>
  );
};

export default React.memo(Home);
