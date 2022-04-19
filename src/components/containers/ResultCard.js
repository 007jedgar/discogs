import React, {useMemo} from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
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
    flex: 1,
    fontSize: wp(4.5),
    fontWeight: '700',
    color: '#454545',
  },
  formats: {
    flex: 1,
  },
})



function ResultCard({ item, onPress }) {
  if (!item) return null;

  const imagePicker = useMemo(() => {
    if (item.thumb) return {uri: item.thumb}

    let img;
    switch(item.type) {
      case 'artist':
        return img = Icons.artist
      case 'master':
        return img = Icons.record
      case 'label':
        return img = Icons.record
      default:
        img = Icons.record
    }
  
    return img
  }, [item.type])

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.card}>
        <Image source={imagePicker} style={styles.thumb} />
        <View style={{flex: 1}}>
          <Text adjustsFontSizeToFit numberOfLines={2} style={styles.title}>{item.title}</Text>
          {item.formats&&item.formats.descriptions?<Text style={styles.formats}>{item.formats[0].descriptions.join(", ")}</Text>:null}
          {item.format&&!item.formats?<Text style={styles.formats}>{item.format.join(", ")}</Text>:null}
          {item.type?<Text style={styles.formats}>{item.type}</Text>:null}
        </View>
      </View>
    </TouchableOpacity>
  )
} 

export { ResultCard }