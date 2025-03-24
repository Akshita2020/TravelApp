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
  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };
  const slicedImage = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImage.length;

  return (
    <View style={styles.conatiner}>
      <ImageBackground
        style={styles.mainImage}
        imageStyle={{borderRadius: 20}}
        source={{uri: mainImage}}>
        <View style={styles.header}>
          <Pressable onPress={onBack} hitSlop={8} style={styles.iconConatiner}>
            <Image style={styles.icon} source={BackButton} />
          </Pressable>
          <Pressable style={styles.iconConatiner} hitSlop={8}>
            <Image style={styles.icon} source={ShareButton} />
          </Pressable>
        </View>
        <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {slicedImage.map((image, index) => (
            <View key={image}>
              <Image source={{uri: image}} style={styles.miniImage} />
              {diffImages > 0 && index === slicedImage?.length - 1 ? (
                <View style={styles.moreImagesContainer}>
                  <Text style={styles.moreImage}>{`+${diffImages}`}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </Pressable>
      </ImageBackground>
      <Text>{item.name}</Text>
    </View>
  );
};

export default React.memo(AttreactionDetails);
