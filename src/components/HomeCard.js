import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeCard = ({
  image,
  cardMainText,
  shippingText,
  priceText,
  rangeText,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <View style={styles.imageView}>
        <Image style={styles.cardImage} source={image} />
      </View>
      <View style={styles.textStyle}>
        <Text numberOfLines={2} style={styles.cardSubText}>
          {cardMainText}
        </Text>
        <View style={styles.textView}>
          <Text style={styles.readyText}>{shippingText}</Text>
        </View>
        <Text style={styles.price}>{priceText}</Text>
        <Text style={[styles.cardSubText, {color: '#313131'}]}>
          {rangeText}
          <Text style={[styles.cardSubText, {color: '#6b6b7b'}]}>
            (Min. Order)
          </Text>
        </Text>
        <View style={styles.yrsView}>
          <Text style={styles.yrsText}>1 yrs CN</Text>
          <Image
            style={styles.image}
            source={require('../../assets/dots.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 10,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardImage: {
    width: 145,
    height: 145,
    resizeMode: 'contain',
  },

  textStyle: {
    padding: 7,
  },
  cardSubText: {
    fontSize: 13,
    color: '#6b6b6b',
    marginVertical: 2,
  },
  price: {
    fontSize: 13,
    color: '#f96805',
    fontWeight: '600',
    marginLeft: 4,
  },
  readyText: {
    fontSize: 12,
    color: '#f9884c',
    padding: 1,
    backgroundColor: '#fdefe4',
    borderRadius: 3,
    paddingHorizontal: 5,
  },
  textView: {
    alignItems: 'flex-start',
    marginVertical: 2,
  },
  yrsView: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'space-between',
  },
  yrsText: {
    fontSize: 10,
    color: '#6b6b6b',
    marginVertical: 2,
  },
  image: {
    width: 20,
    height: 20,
    tintColor: '#d4d4d4',
    alignSelf: 'flex-start',
    paddingTop: 5,
  },
});

export default HomeCard;
