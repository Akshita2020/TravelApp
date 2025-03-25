import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import BackButton from '../../assets/Back.png';

const Map = ({navigation, route}) => {
  const {item} = route?.params || {};
  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.0009,
    longitudeDelta: 0.0009,
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={coords}>
        <Marker coordinate={coords} title={item?.name} />
      </MapView>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Image source={BackButton} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>{`${item?.name}, ${item?.city}`}</Text>
      </View>
    </View>
  );
};

export default React.memo(Map);
