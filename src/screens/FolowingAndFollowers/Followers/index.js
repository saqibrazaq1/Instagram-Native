import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FollowSearch from '../../../components/FollowSearch/FollowSearch'
import { Divider } from 'react-native-paper'
import FollowCards from '../../../components/FollowSearch/FollowCards'

const Followers = () => {
  return (
    <View>
      <FollowSearch/>
      <Divider/>
      <FollowCards/>
      <FollowCards/>
      <FollowCards/>
      <FollowCards/>
      <FollowCards/>
      <FollowCards/>
    

    </View>
  )
}

export default Followers

const styles = StyleSheet.create({})