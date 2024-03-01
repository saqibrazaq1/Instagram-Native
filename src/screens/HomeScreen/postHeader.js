import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as React from 'react';
import { Avatar, IconButton } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';


const PostHeader = (props) => {
  return (
    <View  style={styles.container}>
      <View style={styles.nameCity}>
        <Avatar.Image size={38} source={{ uri: props.postBy?.proImgLink ||'https://plus.unsplash.com/premium_photo-1677094311455-b46a51b52dd0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
        <View  >
  
          <Text style={styles.name}  >{props.postBy?.name}</Text>
          <Text style={styles.city}>{props.postContent.address}</Text>
        </View>
      </View>
      <IconButton icon="dots-vertical" onPress={() => console.log('Pressed')} />
    </View>
  )
}

export default PostHeader

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    // backgroundColor:'green',
    height: 50,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  nameCity: {
    flexDirection: 'row',
    gap: 10,
    // fontWeight:bold,
  },
  name: {
    fontWeight: 'bold',
  },
  city: {
    fontWeight: '200'
  },


})