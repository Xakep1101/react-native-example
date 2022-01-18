import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//Loading screen
const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>Loading....</Text>
    </View>
  );
}

//Home screen
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This will be the home screen of our application</Text>
    </View>
  );
}

export default function App() {
  const [fetchingData, setFetchingDataState] = React.useState(true);
  setTimeout(() => {
    setFetchingDataState(false);
  }, 1000);
  
  if (fetchingData) {
    return <Loading />
  } else {
    return <Home />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
