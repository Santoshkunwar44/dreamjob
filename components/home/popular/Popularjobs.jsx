import React from 'react'
import { View, Text,FlatList,ActivityIndicator,TouchableOpacity } from 'react-native'
import {useState} from "react"


import styles from './popularjobs.style'
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import { COLORS,SIZES } from '../../../constants'
import { useRouter } from 'expo-router'
import { useFetch } from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState("")
  const {data} = useFetch("search",{    
    query:"React developer",
    num_pages:1,
  })
  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      <Text style={styles.headerTitle}>Popularjobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>

      </View>
      <View style={styles.cardsContainer}>

    {
      isLoading ? <ActivityIndicator size="large" color={COLORS.primary}/> :
      error ?<Text>Something went wrnong !</Text> :<FlatList

      data={data}
      renderItem={({item})=>(<PopularJobCard item={item}/>)}
      keyExtractor={item=>item?.job_id}
      contentContainerStyle={{columnGap:SIZES.medium}}
      horizontal
      
      />
    }


      </View>
    </View>
  )
}

export default Popularjobs