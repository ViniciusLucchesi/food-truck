import { StatusBar, SafeAreaView, View } from 'react-native';

import Rotas from './src/routes/rotas.js';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView/>
      <Rotas/>
      <StatusBar/>
    </View>
  );
}