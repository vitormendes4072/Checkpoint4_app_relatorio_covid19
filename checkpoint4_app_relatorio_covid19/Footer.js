import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function App(){
  return (
      <View style={styles.footer}>
      <TouchableOpacity onPress={()=>{alert("hi, you click on footer")}}>
        <Text style={{fontSize: 20}}>Footer Part Text</Text>
      </TouchableOpacity>
      </View>
  );
}

  const styles = StyleSheet.create({
    footer: {
      backgroundColor: 'gold',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
    }
  });

export default App;