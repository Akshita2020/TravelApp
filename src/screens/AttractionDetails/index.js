import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const AttreactionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>Go Back</Text>
      <Text>{item.name}</Text>
    </View>
  );
};

export default React.memo(AttreactionDetails);
