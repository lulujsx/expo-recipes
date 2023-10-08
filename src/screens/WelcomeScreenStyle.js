import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1, // Flex 1 para ocupar todo el espacio disponible
        justifyContent: 'center', // Centrar verticalmente
        alignItems: 'center', // Centrar horizontalmente
        backgroundColor: '#FFC107', // Color de fondo ámbar (#FFC107)
    },
    ring: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 50,
        padding: 2
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 2,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 2,
    },


})

export default styles