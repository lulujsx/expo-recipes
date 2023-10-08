import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
    scrollView: {
        marginVertical: 6,
        paddingTop: 14,
        paddingBottom: 50
    },
    avatar: {
        marginLeft: 4, 
        marginRight: 4,
        marginBottom: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    greetingsContainer: {
        marginHorizontal: 4,
        marginTop: 2,
        marginBottom: 2
    },
    firstText: {
        color: '#6B7280',
        fontSize: hp(1.7)
    },
    secondText: {
        color: '#6B7280',
        fontSize: hp(3.8),
        fontWeight: '600'
    },
    span: {
        color: '#F59E0B'
    },

    searchBar: {
        marginHorizontal: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        padding: 6,
    },
    searchText: {
        fontSize: hp(1.7),
        flex: 1,
        fontSize: 16,
        letterSpacing: 1
    },
    searchButton: {
        backgroundColor: 'white',
        borderRadius: 999,
    }

})

export default styles