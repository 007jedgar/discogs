import React from 'react'
import {
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  img: {

  },
  title: {
    
  },
  format: {
    
  }
})

function EmptyResultCard() {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.img} />
        <View>
          <View style={styles.title} />
          <View style={styles.format} />
        </View>
      </View>
    </View>
  )
} 

export { EmptyResultCard }