import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text>hello world, im lu</Text>
      {/* <StatusBar style="auto" /> */}
      <View>
        <Text>This is a kitty</Text>
        <Image source={{
            uri: 'https://media.giphy.com/media/QoxjcvbhMRwROVGCK4/giphy.gif',
          }}
          style={{width: 200, height: 200}}/>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="escribi algo uwu"
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
