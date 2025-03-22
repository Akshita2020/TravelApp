import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const AttreactionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item.images[0] : null;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.conatiner}>
      <ImageBackground
        style={styles.mainImage}
        imageStyle={{borderRadius: 20}}
        source={{uri: mainImage}}
      />
      <Text onPress={onBack}>Go Back</Text>
      <Text>{item.name}</Text>
    </View>
  );
};

export default React.memo(AttreactionDetails);
