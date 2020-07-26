import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { geolocated } from "react-geolocated";

import AppHeader from './components/AppHeader';

import CrowdFinderScreen from './screens/CrowdFinderScreen';
import SocialDistancingScreen from './screens/SocialDistancingScreen';
import MedicalInstrumentScreen from './screens/MedicalInstrumentScreen';

export default class App extends React.Component {

  

  render(){
    return (
      <View style={styles.container}>
        <AppHeader/>
         <MedicalInstrumentScreen/>
         <CrowdFinderScreen/>
         <SocialDistancingScreen/>
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
