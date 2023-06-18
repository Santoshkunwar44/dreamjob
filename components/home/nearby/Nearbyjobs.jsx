import React, { useState } from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'

import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router';
import { useFetch } from '../../../hook/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import { COLORS, SIZES } from '../../../constants';

const Nearbyjobs = () => {
  const router = useRouter();
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState("")
  const {data} = useFetch("search",{    
    query:"React developer",
    num_pages:1,
  })
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      <Text style={styles.headerTitle}>NearBy Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>

      </View>
      <View style={styles.cardsContainer}>

    {
      isLoading ? <ActivityIndicator size="large" color={COLORS.primary}/> :
      error ?<Text>Something went wrnong !</Text> :<FlatList

      data={data}
      renderItem={({item})=>(<NearbyJobCard item={item}      
               handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
/> )}
    
      keyExtractor={item=>item?.job_id}
      contentContainerStyle={{columnGap:SIZES.medium}}
      
      
      />
    }


      </View>
    </View>
  )
}

export default Nearbyjobs