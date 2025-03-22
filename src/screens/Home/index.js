import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {FlatList, View, Text} from 'react-native';
import Title from '../../components/Title/index';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attraction.json';
import categories from '../../data/categories.json';
const ALL = 'All';

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const FilteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );
      setData(FilteredData);
    }
  }, [selectedCategory]);
  return (
    <FlatList
      data={data}
      numColumns={2}
      style={{flexGrow: 1}}
      ListEmptyComponent={<Text style={styles.emptyText}>No items found</Text>}
      ListHeaderComponent={
        <>
          <View style={{marginRight: 35, marginLeft: 35}}>
            <Title
              text="Where do"
              style={{fontWeight: 'normal', marginTop: 20}}
            />
            <Title text="you want to go" />

            <Title text="Explore Attractions" style={styles.subtitle} />
            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[ALL, ...categories]}
            />
          </View>
        </>
      }
      keyExtractor={item => String(item?.id)}
      renderItem={({item, index}) => (
        <AttractionCard
          onPress={() => navigation.navigate('AttractionDetails',{item})}
          style={
            index % 2 === 0
              ? {marginRight: 12, marginLeft: 32}
              : {marginRight: 32}
          }
          title={item.name}
          subtitle={item.city}
          imageSrc={item.images?.length ? item.images[0] : null}
        />
      )}
    />
  );
};

export default React.memo(Home);
