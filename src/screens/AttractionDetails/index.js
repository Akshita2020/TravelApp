import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import Title from '../../components/Title';
import BackButton from '../../assets/Back.png';
import ShareButton from '../../assets/share.png';
import InfoCard from '../../components/InfoCard';
import schedules from '../../assets/schedules.png';
import locations from '../../assets/locations.png';

const AttreactionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item.images[0] : null;
  const onBack = () => {
    navigation.goBack();
  };
  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };
  const onMapNavigate = () => {
    navigation.navigate('Map', {item});
  };
  const slicedImage = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImage.length;
  const openingHours = ` OPEN
 ${item?.opening_time} - ${item?.closing_time}`;
  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.0009,
    longitudeDelta: 0.0009,
  };

  return (
    <ScrollView style={styles.conatiner} showsVerticalScrollIndicator={false}>
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
      <View style={styles.headerContainer}>
        <View style={{maxWidth: '70%'}}>
          <Title text={item?.name} style={styles.title} />
          <Text style={styles.city}>{item?.city}</Text>
        </View>
        <Title style={styles.title} text={item?.entry_price} />
      </View>
      <InfoCard text={item?.address} icon={locations} />
      <InfoCard text={openingHours} icon={schedules} />
      <MapView style={styles.map} initialRegion={coords}>
        <Marker coordinate={coords} title={item?.name} />
      </MapView>
      <Text style={styles.mapText} onPress={onMapNavigate}>
        Show full screen map
      </Text>
    </ScrollView>
  );
};

export default React.memo(AttreactionDetails);
