import React from 'react';
import {View, Text, ImageBackground, Image, Pressable} from 'react-native';
import styles from './styles';
import BackButton from '../../assets/Back.png';
import ShareButton from '../../assets/share.png';

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
        source={{uri: mainImage}}>
        <View style={styles.header}>
          <Pressable onPress={onBack} hitSlop={8}>
            <Image style={styles.icon} source={BackButton} />
          </Pressable>
          <Pressable hitSlop={8}>
            <Image style={styles.icon} source={ShareButton} />
          </Pressable>
        </View>
        <View style={styles.footer}>
          {item?.images?.length ? item?.images?.map(image =>(
            <Image key={image} source={{uri:image}} style={styles.miniImage}/>
          )):null}
        </View>
      </ImageBackground>
      <Text>{item.name}</Text>
    </View>
  );
};

export default React.memo(AttreactionDetails);
