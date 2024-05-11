import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Course from './src/students/Course';
import MakeClass from './src/teacher/MakeClass';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MakeClass/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:"2%",
  },
});
