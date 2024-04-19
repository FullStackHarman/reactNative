import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,useColorScheme,Image } from 'react-native';
import flatCards from './components/flatcards/flatCards';

export default function App() {
  const isDark = useColorScheme()=== 'dark'
  return (
    <View>
      <flatCards/>

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
