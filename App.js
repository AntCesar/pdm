import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Terminal from "./src/components/Terminal";

export default function App() {
//  return (
//    <SafeAreaView style={styles.container}>
//      <Terminal content={"Terminal 1"} />
//      <Terminal content={"Terminal 2"} />
//    </SafeAreaView>
//  );

  const [login, setLogin] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text>{login}</Text>
      <Text>Login</Text>
      <TextInput
        style={styles.input} 
        onChange={(e) => setLogin(e.target.value)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "gray",
    width: "80%",
  },
});
