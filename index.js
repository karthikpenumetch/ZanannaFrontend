/*
import React from 'react';
import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';


const Home = () => {
    return (
       <View>
            <Text>Home</Text>
       </View>
    )
}

export default Home;
*/

import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={styles.logo}>Zananna</Text>
        <TouchableOpacity style={styles.sidebarButton}>
          <Text style={styles.sidebarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <Text style={styles.sidebarButtonText}>Gamehub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <Text style={styles.sidebarButtonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <Text style={styles.sidebarButtonText}>Host</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <Text style={styles.sidebarButtonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <Text style={styles.sidebarButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButtonSignIn}>
          <Text style={styles.sidebarButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Find and create the perfect game night</Text>
          <Text style={styles.headerSubText}>
            Play fun tabletop games with your friends and meet new people. Obtain new games and share yours with others!
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>READ MORE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPLORE</Text>
          <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
            <View style={styles.card}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.cardTitle}>Pokemon Raid Battle Night</Text>
              <Text style={styles.cardSubTitle}>10/28 from 7:30pm - 10pm</Text>
              <Text style={styles.cardDescription}>BYOB, snacks will be provided!</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.cardTitle}>Monopoly Game Night</Text>
              <Text style={styles.cardSubTitle}>10/30 from 6:00pm - 8:00pm</Text>
              <Text style={styles.cardDescription}>Pizza and drinks BYOB optional!</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.cardTitle}>Checkers with Clowns</Text>
              <Text style={styles.cardSubTitle}>10/28 from 7:30pm - 9:30pm</Text>
              <Text style={styles.cardDescription}>BYOB will provide clown costumes (clean)!</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.cardTitle}>UNO with Custom Rules</Text>
              <Text style={styles.cardSubTitle}>11/02 from 7:00pm - 9:00pm</Text>
              <Text style={styles.cardDescription}>Join us for UNO with custom rules!</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CURRENT EVENTS</Text>
          <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
            <View style={styles.card}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.cardTitle}>Monopoly Party!</Text>
              <Text style={styles.cardSubTitle}>11/03 from 7:30pm - 10pm</Text>
              <Text style={styles.cardDescription}>BYOB, snacks will be provided!</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.cardTitle}>Mega Monopoly Night</Text>
              <Text style={styles.cardSubTitle}>10/28 from 7:30pm - 10pm</Text>
              <Text style={styles.cardDescription}>Will provide mocktails, cocktails, and snacks!</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.cardTitle}>Play Scrabble with Friends!</Text>
              <Text style={styles.cardSubTitle}>10/28 from 7:30pm - 10pm</Text>
              <Text style={styles.cardDescription}>We've got pizza, soda, and homemade sweets!</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.cardTitle}>Chess Tournament</Text>
              <Text style={styles.cardSubTitle}>11/02 from 7:00pm - 9:00pm</Text>
              <Text style={styles.cardDescription}>Join us for an intense night of chess!</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: '100%',
  },
  sidebar: {
    width: 250,
    backgroundColor: '#D32F2F',
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sidebarButton: {
    marginBottom: 10,
  },
  sidebarButtonSignIn: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#fff',
    paddingTop: 10,
  },
  sidebarButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    flexGrow: 1,
    padding: 10,
  },
  header: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  headerSubText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#D32F2F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  horizontalScroll: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 250,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginRight: 10,
    elevation: 3,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardSubTitle: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default App;
