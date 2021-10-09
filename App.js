import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.navbar}>
        <Feather name="arrow-left" size={30} color="black" />
        <Text style={styles.navbarText}>Lista de pessoas</Text>
      </View>

      <View style={styles.svcontainer}>
        <ScrollView contentContainerStyle={styles.scrollview}>
          
          <View style={styles.userContainer}>
            <View style={styles.userImg}></View>
            <View style={styles.userData}>
              <Text>Nome: Lucas Matheus</Text>
              <Text>Idade: 18</Text>
              <Text>Sexo: Masculino</Text>
            </View>
          </View>

          <View style={styles.userContainer}>
            <View style={styles.userImg}></View>
            <View style={styles.userData}>
              <Text>Nome: Mayra Cristina</Text>
              <Text>Idade: 19</Text>
              <Text>Sexo: Feminino</Text>
            </View>
          </View> 

          <View style={styles.userContainer}>
            <View style={styles.userImg}></View>
            <View style={styles.userData}>
              <Text>Nome: Lucas Matheus</Text>
              <Text>Idade: 18</Text>
              <Text>Sexo: Masculino</Text>
            </View>
          </View>

          <View style={styles.userContainer}>
            <View style={styles.userImg}></View>
            <View style={styles.userData}>
              <Text>Nome: Mayra Cristina</Text>
              <Text>Idade: 19</Text>
              <Text>Sexo: Feminino</Text>
            </View>
          </View> 

          <View style={styles.userContainer}>
            <View style={styles.userImg}></View>
            <View style={styles.userData}>
              <Text>Nome: Lucas Matheus</Text>
              <Text>Idade: 18</Text>
              <Text>Sexo: Masculino</Text>
            </View>
          </View>

          <View style={styles.userContainer}>
            <View style={styles.userImg}></View>
            <View style={styles.userData}>
              <Text>Nome: Mayra Cristina</Text>
              <Text>Idade: 19</Text>
              <Text>Sexo: Feminino</Text>
            </View>
          </View> 

          <View style={styles.userContainer}>
            <View style={styles.userImg}></View>
            <View style={styles.userData}>
              <Text>Nome: Lucas Matheus</Text>
              <Text>Idade: 18</Text>
              <Text>Sexo: Masculino</Text>
            </View>
          </View>

          <View style={styles.userContainer}>
            <View style={styles.userImg}></View>
            <View style={styles.userData}>
              <Text>Nome: Mayra Cristina</Text>
              <Text>Idade: 19</Text>
              <Text>Sexo: Feminino</Text>
            </View>
          </View> 
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  navbar:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  navbarText: {
    fontSize: 25,
    marginLeft: 10
  },
  svcontainer: {
    height: '50%',
    width: '95%',
    
    marginTop: 10
  },
  scrollview: {
    flexDirection: 'column',
    backgroundColor: '#f6f6f6',
    padding: 10,
    alignItems: 'center'
  },
  userContainer: {
    width: '95%',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  userImg: {
    height: 53,
    width: 53,
    backgroundColor: '#a8a8a8',
    borderRadius: 50,

  },
  userData: {
    width: '70%',
    marginLeft: 10
  }
});
