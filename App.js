import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [fetchingData, setFetchingDataState] = React.useState(true);
  setTimeout(() => {
    setFetchingDataState(false);
  }, 1000);

  if(fetchingData) {
    return <Loading />
  } else {
    return <Home />
  }

  //Home screen
  const Home = () => {
    return (
      <View style={styles.container}>
        <Text>This will be the home screen of our application</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  //Loading screen
  const Loading = () => {
    return (
      <View style={styles.container}>
        <Text>Loading....</Text>
        <StatusBar style="auto" />
      </View>
    );
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
