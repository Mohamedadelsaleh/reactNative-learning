import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Greet({
    name
}: {name: string}) {
  return (
    <View style={styles.titleContainer}>
      <Text>Greet, {name} </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
  }
})  