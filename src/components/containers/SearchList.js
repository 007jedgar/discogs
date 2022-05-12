import React from 'react'
import {
  FlatList,
} from 'react-native'
import {
  EmptyResultCard,
} from '../components'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

function SearchList({ data, renderItem, renderFooter, onEndReached, error }) {
    return  (<FlatList 
        contentContainerStyle={{paddingBottom: hp(6)}}
        data={data}
        extraData={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<EmptyResultCard error={error} />}
        ListFooterComponent={renderFooter()}
        onEndReached={onEndReached}
        onEndReachedThreshold={.001}
        maxToRenderPerBatch={45}
    />)
}

export { SearchList }