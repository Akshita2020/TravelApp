import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import location from '../../assets/location.png';

const AttractionCard = ({imageSrc, title, subtitle, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image style={styles.icon} source={location} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AttractionCard);
