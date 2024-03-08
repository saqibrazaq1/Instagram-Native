import { StyleSheet, } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Posts from "./ProfileTabs/Posts";
import Reels from "./ProfileTabs/Reels";
import Savedposts from "./ProfileTabs/Savedposts";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const PostsNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false
      }}
    >
      <Tab.Screen
        name="posttab"
        component={Posts}
        options={{
          tabBarIcon: ({focused})=>(
            <MaterialIcons name={focused?"grid-on":'grid-off'} size={24}
            color={focused?'#000':'gray'}/> 
          )
        }}
      />
      <Tab.Screen name="reels" component={Reels} options={{
          tabBarIcon: ({focused})=>(
            <Entypo name={'folder-video'} size={24} color={focused?'#000':'gray'}/> 
          )
        }}/>
      <Tab.Screen name="savedposts" component={Savedposts} options={{
          tabBarIcon: ({focused})=>(
            <MaterialIcons name="perm-contact-cal"  size={24} color={focused?'#000':'gray'}/> 
          )
        }} />
    </Tab.Navigator>
  );
};

export default PostsNavigation;

const styles = StyleSheet.create({});
