import React from 'react'
import { View, Text, StyleSheet } from 'react-native-web'

export default function Terminal() {
  return (
    <View>
      <Text>Terminal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: "8px",
    backgroundColor: "#000",
    width: "80%",
  },

  top: {
    backgroundColor: "#262a31",
  }
})