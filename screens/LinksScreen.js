import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View } from 'react-native';


export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
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

LinksScreen.navigationOptions = {
  title: 'CSS Tricks',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#D1345B',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
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
  },
});
