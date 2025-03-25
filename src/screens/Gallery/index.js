import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import BackButton from '../../assets/Back.png';

const Gallery = ({navigation, route}) => {
  const {images} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={{marginBottom: 24, paddingHorizontal: 32}}
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />
      <TouchableOpacity onPress={onBack} style={styles.backConatiner}>
        <Image source={BackButton} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Gallery);
