import React, { useState } from 'react'
import { View, Text,TouchableOpacity,Image,FlatList,TextInput } from 'react-native'
import styles from './welcome.style';
import {useRouter} from "expo-router"
import {icons,SIZES} from "../../../constants"
const jobTypes= ["Full-time","Part-time","Contractor"]
const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const [activeJobType,setActiveJobType]=useState("Full-time");

  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>HELLO JOBLINK.</Text>
        <Text style={styles.welcomeMessage}>GET YOUR DREAM JOB</Text>

      </View>
      <View style={styles.searchContainer }>
        <View style={styles.searchWrapper}>
            <TextInput 
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={(text)=>setSearchTerm(text)}
          placeholder='What are you looking for?'
          />

        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}> 
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>


      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item})=>(  
        <TouchableOpacity
          onPress={()=>{setActiveJobType(item);router.push(`/search/${item}`)}}
          style={styles.tab(activeJobType , item)}
          >
          <Text style={styles.tabText} > {item} </Text>

          </TouchableOpacity>

  )}
            keyExtractor={item=>item}
            contentContainerStyle={{columnGap:SIZES.small}}
            horizontal
        />

      </View>
    </View>
  )
}

export default Welcome