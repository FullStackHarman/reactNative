import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}><Text> 1 </Text></View>
      <View style={styles.box}><Text> 2 </Text></View>
      
   
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  box:{
    backgroundColor:"#F9EDE3",
    height:100 ,
    width:100,
    fontSize:25,
  },
  text:{
    
  }
});
