import React from 'react'
import { View, Text,TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import JobService from '../../../../utils/Services/JobService'

const PopularJobCard = ({item,selectedJob,handleCardPress}) => {

  return (


      <TouchableOpacity
      style={styles.container(selectedJob,item)}
      onPress={()=>handleCardPress(item)}

      >

        <TouchableOpacity style={styles.logoContainer(selectedJob,item)}> 

        <Image 
        style={styles.logoImage}
        resizeMode='contain'
        source={{uri:JobService.checkImageURL(item?.employer_logo) ? item?.employer_logo:"https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}}/>

        </TouchableOpacity>
<Text numberOfLines={1} style={styles.companyName}>{item?.employer_name}</Text>
<View style={styles.infoContainer}>

  <Text numberOfLines={1} style={styles.jobName(selectedJob,item)}>
    {item.job_title}
  </Text>
  <Text style={styles.location}>

    {
      item?.job_country
    }

  </Text>


</View>
      </TouchableOpacity>

  )
}

export default PopularJobCard