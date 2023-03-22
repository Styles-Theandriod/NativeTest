import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.innerDiv}>
              <Text style={styles.centeredText}>Sustainable solution for the future</Text>
              <Button title='Get Started' style={styles.button} />
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    flex: 1,
    width: "100%",
  },
  centeredText: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: 800,
    marginBottom: 20,
  },
  innerDiv: {
    backgroundColor: "blue",
    width: "100%",
    padding: 50,
    marginTop: 458,
    height: 400,
  },
  button: {
    backgroundColor: "#FF0000",
    padding: 20,
    borderRadius: 40,
      marginTop: "50%",
    color:'#000'
  },
});