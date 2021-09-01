import React from 'react';
import Data from './dados_covid.json';
import Footer from './Footer';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const App = () =>{
  return (
    <View style={styles.container}>

      <View style={styles.head}>
        <Text style={styles.title}>Relatório COVID-19</Text>
      </View>

      <View style={styles.body}>
        { Data.map(post => {
          return(
            <View key={post.id} style={styles.view}>
              
              <ScrollView style={{marginBottom: 10, marginTop: 10}}>
                
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.name}>{post.nome}</Text>
                  <Text style={styles.status}/>
                </View>

                <Text>Sexo: {post.sexo} </Text>
                <Text>Data de Nascimento: {post.data_nasc} </Text>
              
              </ScrollView>
            
            </View>
          )
        }) }
      </View>
<Footer />
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      margin: 0,
      fontSize: 16,
      flex: 1,
    },
    name: {
      fontWeight: 'bold',
      flex: 3,
    },
    view: {
      borderWidth: 1,
      fontSize: 16,
      borderRadius: 18,
      paddingHorizontal: 20,
      marginBottom: 10
      
    },
    status: {
      borderWidth:1,
      borderColor:'red',
      alignItems:'right',
      width: 12,
      height: 12,
      backgroundColor:'red',
      borderRadius:50,
    },
    body: {
      flex: 1,
      backgroundColor: '#E5E5E6',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10
    },
    head: {
      backgroundColor: '#4494B0',
      padding: 10
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center'
    }
  });

export default App;