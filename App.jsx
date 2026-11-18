import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  // Let counter = 0;
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  const reset = () => {
    // counter = 0;
    setCounter(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <Button title="+1" onPress={addOne} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});