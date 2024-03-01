import * as React from 'react';
import { Touchable, TouchableOpacity, View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';

const Card = ({ userImage, userName , onPress }) => (
  <View style={{ alignItems: 'center' }}>
    <TouchableOpacity onPress={onPress} style={{ borderWidth: 2, borderColor: '#ee2a7b', borderRadius: 50, padding: 2 }} >
      <Avatar.Image size={65} source={{ uri: userImage }} />
    </TouchableOpacity>
    <Text>{userName}</Text>
  </View>
);
export default Card;
