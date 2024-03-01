import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../HomeScreen';
import ProfileScreen from "../ProfileScreen/index"

const HomeRoute = () => <HomeScreen/>;

const SearchRoute = () => <Text>Albums</Text>;

const AddRoute = () => <Text>Recents</Text>;

const LikeRoute = () => <Text>Notifications</Text>;

const ProfileRoute = () => <ProfileScreen/>;

const Dashboard = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', focusedIcon: 'home', unfocusedIcon: 'home-outline', },
    { key: 'search', focusedIcon: 'magnify-plus-outline',unfocusedIcon: 'magnify' },
    { key: 'add', focusedIcon: 'plus-box',unfocusedIcon: 'plus-box-outline' },
    { key: 'like', focusedIcon: 'cards-heart', unfocusedIcon: 'cards-heart-outline' },
    { key: 'profile', focusedIcon: 'face-man-profile'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home:HomeRoute,
    search: SearchRoute,
    add: AddRoute,
    like: LikeRoute,
    profile:ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled = {false}
      barStyle={{ backgroundColor: '#fff',height: 60 }}
    />
  );
};

export default Dashboard;