import { useEffect ,useState} from "react";
import axios from "axios"
const rapidApiKey = "2ef23b9a82mshe843ad1096690a7p1173ccjsn6294a198b90e";
export const useFetch=(endpoint,query)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] =useState(false)
    const [ error,setError] = useState("")

    console.log(rapidApiKey)

    const options = {
  method: 'GET',
  url: `    https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {
    ...query
  },
  headers: {
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

    const fetchData=async()=>{

        
        try {
            setLoading(true)
              const res =   await axios.request(options)
            setData(res.data.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            alert("something went wrong");
        }finally{
            setLoading(false)
        }


    }


    useEffect(()=>{
        fetchData()
    },[])

    const reFetch=()=>{
        fetchData()
    }


    return {data,loading,error,reFetch}
}