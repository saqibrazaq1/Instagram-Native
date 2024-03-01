import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Route from './src/route/route';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './redux/Store/store';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Route />
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
