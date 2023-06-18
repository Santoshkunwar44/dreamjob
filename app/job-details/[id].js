import React, { useState } from 'react'
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, View } from 'react-native'
import { COLORS, SIZES, icons } from '../../constants'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { useFetch } from '../../hook/useFetch';

const tabs = [ "About","Qualifications","Responsibilities"];


const JobDetails = () => {


  const params  = useSearchParams()
  const router = useRouter()
  const [refreshing,setRefreshing]  = useState(false);
  const [activeTab,setActiveTab] =useState(tabs[0])
  const onRefresh =()=>{}
  const {data ,reFetch ,loading,error} = useFetch("job-details",{
    job_id:params.id 
  })

  const displayTabContent=()=>{
    switch (activeTab) {
    case "About":
        return <JobAbout info={data[0].job_description ?? "No data provided"}/>
      
    case "Qualifications":
      return <Specifics
      title={"Qualifications"}
      points={data[0].job_highlights?.Qualifications ?? ['N/A']}

      />
    case "Responsibilities":
          return <Specifics
      title={"Responsibilities"}
      points={data[0].job_highlights?.Responsibilities ?? ['N/A']}

      />
    
    }
  }

 

  return (
    <SafeAreaView style={{backgroundColor:COLORS.lightWhite,flex:1}}>

      <Stack.Screen
      options={{
        headerTitle:"",
        headerShadowVisible:false,
        headerStyle:{backgroundColor:COLORS.white},
        headerRight:<ScreenHeaderBtn iconUrl={icons.share} dimension={"60%"} handlePress={()=>router.back()}/>,
        headerLeft:<ScreenHeaderBtn iconUrl={icons.chevronLeft} dimension={"60%"}/>,
      }}
      />
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/> }>

        {
        loading ? 
          <ActivityIndicator size={"large"} color={COLORS.primary}/>:
          error ? 
          <Text>something went wrong</Text>
          :data.length ===0?
          <Text>No data</Text>
          :
          <View style={{padding:SIZES.medium ,paddingBottom:100}}>

            <Company
              companyLogo={data[0].employer_logo}            
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />

            <JobTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />

            {displayTabContent()}


          </View>
        }

      </ScrollView>
      <JobFooter url={data[0]?.job_google_link ?? "https://careers.google.com/jobs/results"}/>

    </SafeAreaView>
  )
}

export default JobDetails