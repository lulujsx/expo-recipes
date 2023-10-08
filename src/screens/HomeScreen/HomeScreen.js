import { StatusBar } from "expo-status-bar"
import styles from "./styles"
import { View, Text, Image,ScrollView, TextInput } from "react-native"
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

export default function HomeScreen(){
  return (
    <View >
      
     
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      
        {/* avatar and bell icon */}
        <View style={styles.avatar}>
          <Image source={require('../../../assets/images/avatar.png')} style={{height: hp(5),width: hp(5.5)}}/>
          <BellIcon size={hp(4)} color="gray" />
        </View>
      
        {/* greetings and punchline */}
        <View style={styles.greetingsContainer}>
          <Text style={styles.firstText}>Hello, Lu!</Text>
          <View>
            <Text style={styles.secondText}>Make your own food,</Text>
          </View>
          <Text style={styles.secondText} className="font-semibold text-neutral-600">
            stay at <Text style={styles.span}>home</Text>
          </Text>
        </View>
      
        {/* search bar */}
        <View style={styles.searchBar}>
          <TextInput
            placeholder='Search any recipe'
            placeholderTextColor={'gray'}
            style={styles.searchText}
          />
          <View style={styles.searchButton}>
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" /> 
          </View>
        </View>
      
      
      
      
      
      
       </ScrollView>
    </View>
  )
}

