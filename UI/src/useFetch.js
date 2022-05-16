//Custom hook to fetch data
import {useState, useEffect} from "react"

export function useFetch(uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
      if(!uri) 
    
      fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
    }, [uri]);

    return({loading, data, error})
    
}