import { useState } from 'react'
import axios from 'axios'
const config  = require('../../config.json') 
export const useSearchDiscogs = ({ search, }) => {
  const [ state, updateState ] = useState({ data: null, next: '', isLast: false, loading: false, error: null })

  const makeUrl = (forNextPage) => {
    let url = `https://api.discogs.com/database/search?q=${search.trim().replace(' ', '%20')}&token=${config.distoken}&page=1&per_page=20`
    return forNextPage?state.next:url
  }

  const makeRequest = (forNextPage) => {
    updateState({ ...state, loading: true, error: null })
    
    let url = makeUrl(forNextPage)    

    if (search) {   
      if (forNextPage && !state.next) {
        return updateState({ ...state, isLast: true })
      }

      axios.get(url)
      .then((res) => {
        let { results, pagination } = res.data
        
        if (forNextPage) { // if next page is loading
          return updateState(s => ({ 
            ...s, 
            data: [...s.data, ...results], 
            loading: false, 
            error: null, 
            next: pagination.urls.next 
          }))
        }
        
        updateState({ 
          ...state,
          data: results, 
          loading: false, 
          error: null, 
          next: pagination.urls.next 
        })
      }).catch((err) => {
        updateState({ ...state, loading: false, error: err, })
      })
    } else { // clear data
      updateState({ data: [], loading: false, error: null, next: '' })
    }
  }

  return [ state, makeRequest ] 
}