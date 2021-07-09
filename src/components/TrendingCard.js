import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {BlurView} from '@react-native-community/blur';

const ReciepeCardDetails = ({recipeItem}) => {
  return (
    <View style={{flex: 1}}>
        {/* Name and Bookmark */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            width: '70%',
            color: COLORS.white,
            ...FONTS.h3,
            fontSize: 18,
          }}>
          {recipeItem.name}
        </Text>
        <Image
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={{width: 20, height: 20, tintColor: COLORS.darkGreen, marginTop:SIZES.base}}
        />
      </View>
      {/* Duration & Serving */}
      <Text style={{color:COLORS.lightGray, ...FONTS.body4}}>
          {recipeItem.duration} | {recipeItem.serving} Serving
      </Text>
    </View>
  );
};

const RecipeCardInfo = ({recipeItem}) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView blurType="dark" style={styles.recipeCardContainer}>
        <ReciepeCardDetails recipeItem={recipeItem} />
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          ...styles.recipeCardContainer,
          backgroundColor: COLORS.transparentGray,
        }}>
        <ReciepeCardDetails recipeItem={recipeItem} />
      </View>
    );
  }
};
const TrendingCard = ({containerStyle, recipeItem, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 250,
        height: 350,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={{
          width: 250,
          height: 350,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4,
          }}>
          {recipeItem.category}
        </Text>
      </View>
      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};
export default TrendingCard;

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
});
