import React, { useState } from 'react'
import axios from 'axios'

export const useSearchDiscogs = ({ search, }) => {
  const [ state, setState ] = useState({ data: null, next: '', isLast: false, loading: false, error: null })
  
  const makeRequest = (page=1) => {
    setState({ ...state, loading: true, error: null })

    let url = `https://api.discogs.com/database/search?q=${search.trim().replace(' ', '%20')}&token=hUGOnBbHihjHhcDhrWvxiHqQWBDzNpuYUtAhTPUN&page=${page}&per_page=20`
    if (page>1) {
      if (!state.next) {
        return setState({ ...state, isLast: true })
      }
      url = state.next
    }

    if (search) {      
      axios.get(url)
      .then((res) => {
        let { results, pagination } = res.data

        if (page>1) { // if next page is loading
          let newData = state.data
          let concatted = newData.concat(results)
          return setState({ ...state, data: concatted, loading: false, error: null, next: pagination.urls.next })
        }
        
        setState({ data: results, loading: false, error: null, next: pagination.urls.next })
      }).catch((err) => {
        setState({ ...state, loading: false, error: err, })
      })
    } else { // clear data
      setState({ data: [], loading: false, error: null })
    }
  }

  return [ state, makeRequest ] 
}