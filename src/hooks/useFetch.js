import React, { useEffect, useState } from 'react'
import Config from "react-native-config";
import axios from 'axios'

export const useFetch = ({ search }) => {
  const [ state, setState ] = useState({ data: null, loading: false, error: null })
  const [ page, setPage ] = useState(1)
  
  const makeRequest = () => {
    setState({ data: null, loading: true, error: null })

    let url = `https://api.discogs.com/database/search?q=${search.replace(' ', '%20')}&token=hUGOnBbHihjHhcDhrWvxiHqQWBDzNpuYUtAhTPUN&page=1&per_page=10`
    
    if (search) {
      axios.get(url)
      .then((res) => {
        console.log(JSON.stringify(res.data.results), null, 2)
        let data = res.data.results 
        setState({ data, loading: false, error: null })
        // setPage(page => page++)
      }).catch((err) => {
        console.log(err)
        setState({ data: null, loading: false, error: err })
      })
    } else {
      setState({ data: [], loading: false, error: null })
    }
  }

  return [ state, makeRequest ] 
}