import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import {images, COLORS, SIZES, FONTS, icons, dummyData} from '../constants';
import {CategoryCard, TrendingCard} from '../components';

const Home = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
        }}>
        {/* Text */}
        <View style={{flex: 1}}>
          <Text style={{color: COLORS.darkGreen, ...FONTS.h2}}>
            Welcome To Food App
          </Text>
          <Text style={{marginTop: 3, color: COLORS.gray, ...FONTS.body3}}>
            What you want cook today?
          </Text>
        </View>

        {/* Image */}
        <TouchableOpacity
          onPress={() => {
            console.log('Profile');
          }}>
          <Image
            source={images.profile}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
          paddingHorizontal: SIZES.radius,
        }}>
        <Image
          source={icons.search}
          style={{width: 20, height: 20, tintColor: COLORS.gray}}
        />

        <TextInput
          style={{
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipe"></TextInput>
      </View>
    );
  }

  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}>
        <View
          style={{width: 100, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={images.recipe}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </View>
        <View style={{flex: 1, paddingVertical: SIZES.radius}}>
          <Text style={{width: '70%', ...FONTS.body4}}>
            You have 12 recipes that you haven't tried yet!
          </Text>

          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              console.log('See Recipes');
            }}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTrendingSection() {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Trending Recipes
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `$(item.id)`}
          renderItem={({item, index}) => {
            return (
              <TrendingCard
                recipeItem={item}
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.padding : 0, // if item is first then left margin size.padding otherwise it will be 0
                }}
                onPress={() => navigation.navigate('Recipe', {recipe: item})}
              />
            );
          }}
        />
      </View>
    );
  }

  function renderCategory() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
        }}>
        {/* Section Title */}
        <Text style={{flex: 1, ...FONTS.h2}}>Category</Text>

        {/* View All */}
        <TouchableOpacity>
          <Text style={{color: COLORS.gray, ...FONTS.body4}}>View All</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `$(item.id)`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator="false"
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* SearchBar */}
            {renderSearchBar()}
            {/* Reciepe Card */}
            {renderSeeRecipeCard()}
            {/* Tranding Section */}
            {renderTrendingSection()}
            {/* Category Header */}
            {renderCategory()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              categoryItem={item}
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
        ListFooterComponent={<View style={{marginBottom: 100}}></View>}
      />
    </SafeAreaView>
  );
};

export default Home;
