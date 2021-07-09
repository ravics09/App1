import {COLORS, FONTS} from '../constants';
import React from 'react';

import {TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//Creating Custom button independent component where we can use it with different parameters like name, color, style, and onpress action
const CustomButton = ({buttonText, buttonContainerStyle, colors, onPress}) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={colors}
          style={{
            ...buttonContainerStyle,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.white,
              ...FONTS.h3,
            }}>
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          ...buttonContainerStyle,
        }}
        onPress={onPress}>
        <Text
          style={{
            textAlign: 'center',
            color: COLORS.white,
            ...FONTS.h3,
          }}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};
export default CustomButton;
