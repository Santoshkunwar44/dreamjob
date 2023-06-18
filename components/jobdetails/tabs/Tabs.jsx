import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton =({activeTab,name,onHandleSearchType})=>{
  return(
<>

<TouchableOpacity  onPress={onHandleSearchType} style={styles.btn(name,activeTab)}>
  <Text style={styles.btnText(name,activeTab)}>{name}</Text>
</TouchableOpacity>

</>
  )
}
const Tabs = ({tabs,activeTab,setActiveTab}) => {
  return (
    <View style={styles.container}>

      <FlatList
      data={tabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item=>item}
      contentContainerStyle={{columnGap:SIZES.small}}
      renderItem={({item})=>(
        <TabButton name={item} activeTab={activeTab} onHandleSearchType={()=>setActiveTab(item)}/>
      )}
      />
      
    </View>
  )
}

export default Tabs