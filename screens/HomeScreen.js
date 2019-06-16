import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
        <FlatList
          data={[
            {key: 'Devin', lock: 'heeep'},
            {key: 'Jackson', lock: 'heeep'},
            {key: 'James', lock: 'heeep'},
            {key: 'Joel', lock: 'heeep'},
            {key: 'John', lock: 'heeep'},
            {key: 'Jillian', lock: 'heeep'},
            {key: 'Jimmy', lock: 'heeep'},
            {key: 'Julie', lock: 'heeep'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key} : {item.lock}</Text>}
        />

        </View>

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function handleHelpPress() {
  navigate(LinksScreen)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1345B',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 25,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  navigationFilename: {
    marginTop: 5,
  },
  item: {
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    marginBottom: 5,
    height: 300,
    width: 300,
    borderRadius: 15,
  }
});
