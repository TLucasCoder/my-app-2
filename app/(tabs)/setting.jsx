import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const setting = () => {
  return (
    <SafeAreaView style ={styles.container}>
      <View style={{position:'fixed',alignItems: 'center', backgroundColor:"#130933", width:'100%', padding:20, marginTop:30 }} >
      <Text style ={{color:'white' ,fontSize:22}}>Setting</Text>
      </View>
    </SafeAreaView>

  )
}

export default setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
    //
    //,
    }
})