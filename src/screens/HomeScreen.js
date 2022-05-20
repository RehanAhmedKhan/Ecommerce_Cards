import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import WrapperSafeAreaView from '../components/WrapperSafeAreaView';
import HomeCard from '../components/HomeCard';
import MasonryList from '@react-native-seoul/masonry-list';

const HomeScreen = () => {
  const cardValues = [
    {
      image: require('../../assets/cap_1.png'),
      cardMainText: 'Hn0001 Custom Print 3d Logo Otto High Quality Quick Dry',
      shippingText: 'Ready to ship',
      priceText: '$0.38',
      rangeText: '1 Piece ',
    },
    {
      image: require('../../assets/cap_2.png'),
      cardMainText: '2021 Popular OTOP Custom Logo Quick Dry Fabric Cap Print',
      shippingText:
        'Online customization Online customization Online customization',
      priceText: '$0.88',
      rangeText: '25 Piece ',
    },
    {
      image: require('../../assets/cap_2.png'),
      cardMainText:
        '2021 Popular OTOP Custom Logo Quick Dry Fabric Cap Print Custom',
      shippingText: 'Online customization',
      priceText: '$0.88',
      rangeText: '25 Piece ',
    },
    {
      image: require('../../assets/cap_1.png'),
      cardMainText: 'Hn0001 Custom Print 3d Logo Otto High Quality Quick Dry',
      shippingText: 'Ready to ship',
      priceText: '$0.38',
      rangeText: '1 Piece ',
    },
  ];

  return (
    <WrapperSafeAreaView>
      <MasonryList
        showsVerticalScrollIndicator={false}
        data={cardValues}
        numColumns={2}
        renderItem={({item}) => (
          <HomeCard
            image={item.image}
            cardMainText={item.cardMainText}
            shippingText={item.shippingText}
            priceText={item.priceText}
            rangeText={item.rangeText}
          />
        )}
      />
    </WrapperSafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
