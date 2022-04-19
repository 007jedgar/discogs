import React from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'
import { 
  widthPercentageToDP as wp, 
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  img: {
    backgroundColor: '#c1c1c1',
    width: wp(18),
    height: wp(18),
    margin: wp(2),
  }, 
  title: {
    backgroundColor: '#c1c1c1',
    width: wp(50),
    height: wp(2),
    margin: wp(1),
    marginTop: wp(3),
  },
  format: {
    backgroundColor: '#c1c1c1',
    width: wp(18),
    height: wp(2),
    margin: wp(1),
  },
  text: {
    textAlign: 'center',
    color: 'dimgrey',
  },
})

function EmptyResultCard() {
  return (
    <View style={{margin: wp(4)}}>
      <Text style={styles.text}>Nothing Here</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.img} />
        <View style={{}}>
          <View style={styles.title} />
          <View style={styles.title} />
          <View style={styles.format} />
        </View>
      </View>
    </View>
  )
} 

export { EmptyResultCard }