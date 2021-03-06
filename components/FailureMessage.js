import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FailureMessage extends React.Component {

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <Text style={styles.titleText}> Sorry, not close enough! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
