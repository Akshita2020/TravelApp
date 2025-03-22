import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const AttreactionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text onPress={onBack}>Go Back</Text>
      <Text>{item.name}</Text>
    </View>
  );
};

export default React.memo(AttreactionDetails);
