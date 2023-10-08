import { View, Text, Image} from "react-native"
import { StatusBar } from "expo-status-bar"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Animated,{ useSharedValue, withSpring } from "react-native-reanimated"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import styles from "./style"
import { StyleSheet } from "react-native"

export default function WelcomeScreen() {

    // const ring1padding = useSharedValue(0)
    // const ring2padding = useSharedValue(0)

    const navigation = useNavigation()

    useEffect(() => {
        // ring1padding.value = 0
        // ring2padding.value = 0
        // setTimeout(() => ring1padding.value = withSpring(ring1padding.value+hp(5)),100) 
        // setTimeout(() => ring2padding.value = withSpring(ring2padding.value+hp(5.5)),300) 
        setTimeout(()=> navigation.navigate('Home'),2500)
    },[])

    return(
        <View style={styles.container}>
            <StatusBar style="light"/>

            {/* logo image */}

            <View style={styles.ring}>
                <Image source={require('../../../assets/images/welcome.png')} 
                       style={{width: hp(20), height: hp(20)}}/>
            </View>
 
            {/* title and punchline */}
            <View style={styles.titleContainer}>
                <Text style={StyleSheet.compose(styles.text, { fontSize: hp(7) })}>
                    FoodUwU
                </Text>
                <Text style={StyleSheet.compose(styles.text, { fontSize: hp(2) })}>
                    Food is always right
                </Text>

            </View>


        </View>
    )
}