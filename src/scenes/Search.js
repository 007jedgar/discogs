import React, { useState } from 'react'
import {
  Text,
  View,
  FlatList,
} from 'react-native'
import { useSearchDiscogs } from '../hooks/useSearchDiscogs'
import { useForm } from '../hooks/useForm'
import {
  EmptyResultCard,
  ResultCard,
  SearchField,
  LoadingWidget,
} from '../components'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

function Search(props) {
  const [ values, setValues ] = useForm({ search: "" })
  const [{ data, loading, error, isLast }, makeRequest ] = useSearchDiscogs({ search: values.search })
  const [ currentPage , setCurrentPage ] = useState(1)

  const renderItem = ({ item, }) => {
    return (
      <ResultCard item={item} onPress={() => props.navigation.navigate("Listing", { item })} />
    )
  }

  const renderFooter = () => {
    if (loading) {
      return <LoadingWidget show={true} />
    }
    if (isLast) {
      return <Text style={{textAlign: 'center'}}>Showing All Results for {values.search}</Text>
    }
  }

  return (
    <View style={{flex: 1,}}>
      <SearchField 
        placeholder={"search"} 
        value={values.search} 
        onChangeText={(t) => setValues(t, "search")} 
        onClose={() => {
          setValues("", "search")
        }}
        onSubmitEditing={() => {
          makeRequest()
          setCurrentPage(1)
        }}
      />
      {!data&&<LoadingWidget show={loading} />}
      <FlatList 
        contentContainerStyle={{paddingBottom: hp(8)}}
        data={data}
        extraData={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<EmptyResultCard error={error} />}
        onEndReached={() => {
          makeRequest(currentPage+1)
          setCurrentPage(c=>c+1)
        }}
        ListFooterComponent={renderFooter()}
        onEndReachedThreshold={.001}
      />
    </View>
  )
} 

export default Search
