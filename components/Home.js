import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Home() {
  return (
    <TouchableWithoutFeedback onClick={() => {
      Keyboard.dismiss;
    }}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerSearch}>Search</Text>
          <Text style={styles.headerYoutube}>YouTube</Text>
          <Text style={styles.headerMusic}>Music</Text>
        </View>

        <View style={styles.mainHeading}>
          <Text style={styles.mainHead}>Snaptube</Text>
        </View>

        <View style={styles.search}>
          <TextInput
            placeholder='not ramaiya vastavaiya'
            style={styles.searchText}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerDownload}>Download</Text>
          <Text style={styles.footerPlay}>Play</Text>
          <Text style={styles.footerSettings}>Settings</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 55,
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    gap: 60,
  },
  mainHeading: {
    marginTop: 200,
    marginHorizontal: 50,
  },
  mainHead: {
    color: 'yellow',
    fontWeight: '700',
    fontSize: 30,
  },
  search: {
    borderRadius: 20,
  },
  footer: {
    color: 'white',
    flexDirection: 'row',
    gap: 55,
    marginTop: 320,
  },
  headerSearch: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  headerYoutube: {
    color: 'grey',
  },
  headerMusic: {
    color: 'grey',
  },
  footerDownload: {
    color: 'white',
  },
  footerPlay: {
    color: 'grey',
  },
  footerSettings: {
    color: 'grey',
  },
  searchText: {
    borderRadius: 30,
    padding: 10,
    borderColor: '#fff',
    width: 300,
    height: 50,
    color: 'white',
    backgroundColor: '#5A5A5A',
    marginTop: 10,
  },
});
