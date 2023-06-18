import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import JobService from '../../../../utils/Services/JobService'

const NearbyJobCard = ({selectedJob ,item,handleNavigate}) => {

  return (


    <TouchableOpacity
    style={styles.container}
    onPress={handleNavigate}

    >

      <TouchableOpacity style={styles.logoContainer}> 

      <Image
      style={styles.logImage}
      resizeMode='contain'
      source={{uri:JobService.checkImageURL(item?.employer_logo) ? item?.employer_logo:"https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}}/>

      </TouchableOpacity>
<View style={styles.textContainer}>
<Text numberOfLines={1} style={styles.jobName}>{item?.job_title}</Text>

<Text numberOfLines={1} style={styles.jobType}>
  {item.job_employment_type}
</Text>
{/* <Text style={styles.location}>

  {
    item?.job_country
  }

</Text> */}


</View>
    </TouchableOpacity>

)
}

export default NearbyJobCard