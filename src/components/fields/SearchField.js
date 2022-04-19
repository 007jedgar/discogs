import React, { useRef } from 'react'
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Icons from '@assets/icons'

const styles =  StyleSheet.create({
  container: {
    backgroundColor: '#696969',
    padding: wp(2),
  },
  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
  },
  input: {
    color: '#fff',
    fontSize: wp(5),
    backgroundColor: '#454545',
    padding: wp(2),
    width: wp(80),
    alignSelf: 'center',
    borderRadius: 2,
  },
  closeBtn: {
    alignSelf: 'center',
  },
  close: {
    width: wp(7),
    height: wp(7),
  },
})

function SearchField({ placeholder, value, onChangeText, onSubmitEditing, onClose, }) {
  const inputRef = useRef(null)
  return (
    <View style={styles.container}>
      <View style={styles.inputBar}>
        <TextInput 
          ref={inputRef}
          placeholder={placeholder} 
          placeholderTextColor="#c1c1c1"
          selectionColor="#f1f1f1"
          onChangeText={onChangeText}
          style={styles.input}
          value={value}
          returnKeyType="search"
          onSubmitEditing={onSubmitEditing}
        />
        <TouchableOpacity style={styles.closeBtn} onPress={() => {
            inputRef.current.blur()
            onClose()
          }}>
          <Image source={Icons.lightClose} style={styles.close} />
        </TouchableOpacity>
      </View> 
    </View>
  )
} 

export {SearchField}
