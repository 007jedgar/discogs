import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import ExpoFastImage from 'expo-fast-image';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icons from '@assets/icons'

const styles = StyleSheet.create({
  thumb: {
    width: wp(18),
    height: wp(18),
    marginRight: wp(2),
    borderRadius: wp(1)
  },
  container: {
    padding: wp(2),
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    fontSize: wp(4.5),
    fontWeight: '700',
    color: '#454545',
  },
  formats: {
    flex: 1,
  },
})

function ResultCard({ item, }) {
  console.log(item)
  if (!item) return null;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={item.thumb?{uri: item.thumb }:Icons.record} style={styles.thumb} />
        <View style={{flex: 1}}>
          <Text style={styles.title}>{item.title}</Text>
          {item.formats&&<Text style={styles.formats}>{item.formats[0].descriptions.join(", ")}</Text>}
          {item.format&&!item.formats?<Text style={styles.formats}>{item.format.join(", ")}</Text>:null}
        </View>
      </View>
    </View>
  )
} 

export { ResultCard }