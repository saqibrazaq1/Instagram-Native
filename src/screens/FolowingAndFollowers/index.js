import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import Following from "../FolowingAndFollowers/Follwoing/index";
import Followers from "./Followers/index";
import Subscription from "./Subscription/index";
import { Appbar, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const FollowingNavigation = () => {
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();
  const _goBack = () => navigation.goBack();

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="UserName" />
      </Appbar.Header>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Followers"
          component={Followers}
          options={{
            tabBarIcon: ({ focused }) => (
              <Text style={styles.following}>Followers</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Following"
          component={Following}
          options={{
            tabBarIcon: ({ focused }) => (
              <Text style={styles.following}>Following</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Subscription"
          component={Subscription}
          options={{
            tabBarIcon: ({ focused }) => (
              <Text style={styles.following}>Subscription</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default FollowingNavigation;

const styles = StyleSheet.create({
  following:{
    color:'gray',
    width:100,
  }
});
