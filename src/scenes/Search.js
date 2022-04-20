import React from 'react'
import {
  Text,
  View,
  FlatList,
} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useSearchDiscogs } from '../hooks/useSearchDiscogs'
import { useForm } from '../hooks/useForm'
import {
  EmptyResultCard,
  SearchField,
  LoadingWidget,
} from '../components'
import ResultCard from '../components/containers/ResultCard'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

function Search(props) {
  const [ values, setValues ] = useForm({ search: "" })
  const [{ data, loading, error, isLast }, makeRequest ] = useSearchDiscogs({ search: values.search })

  const renderItem = ({ item, }) => {
    return (
      <ResultCard item={item} onPress={() => props.navigation.navigate("Listing", { item })} />
    )
  }

  const renderFooter = () => {
    if (loading && data) {
      return <LoadingWidget show={true} />
    }
    if (isLast) {
      return <Text style={{textAlign: 'center'}}>Showing All Results for {values.search}</Text>
    }
  }

  const onEndReached = () => {
    if (!loading) makeRequest(true)
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar />
      
      <SearchField 
        placeholder={"search"} 
        value={values.search} 
        onChangeText={(t) => setValues(t, "search")} 
        onClose={() => {
          setValues("", "search")
        }}
        onSubmitEditing={() => makeRequest(false)}
      />
      
      {!data&&<LoadingWidget show={loading} />}
      
      <FlatList 
        contentContainerStyle={{paddingBottom: hp(6)}}
        data={data}
        extraData={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<EmptyResultCard error={error} />}
        ListFooterComponent={renderFooter()}
        onEndReached={onEndReached}
        onEndReachedThreshold={.001}
      />
    </View>
  )
} 

export default Search
