import React, {useEffect, useState} from 'react'
import {
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native'
import { useFetch } from '../hooks/useFetch'
import { useForm } from '../hooks/useForm'
import {
  EmptyResultCard,
  ResultCard,
  SearchField,
} from '../components'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles =  StyleSheet.create({

})

function Search() {
  const [ values, setValues ] = useForm({ search: "" })
  const [{ data, isLoading, error }, makeRequest ] = useFetch({ search: values.search, next: null })
  const [ prevSearches, setPrevSearches ] = useState([])

  useEffect(() => {

  },[])

  const renderItem = ({ item, }) => {
    return (
      <ResultCard item={item} />
    )
  }

  return (
    <View>
      <SearchField 
        placeholder={"search"} 
        value={values.search} 
        onChangeText={(t) => setValues(t, "search")} 
        onClose={() => {
          setValues("", "search")

        }}
        onSubmitEditing={() => {
          makeRequest()
        }}
      />
      {isLoading?<View>Loading</View>:null}
      <FlatList 
        contentContainerStyle={{paddingBottom: hp(8)}}
        data={data}
        extraData={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<EmptyResultCard />}
      />
    </View>
  )
} 

export default Search
