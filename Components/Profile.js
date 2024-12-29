import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.bg}>

            <Image style={styles.img} width={100} height={100} source={{ uri: 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' }}></Image>

            <Text style={styles.title}>Jenan</Text>
            <View></View>

            <View style={styles.infoBig}>
                <View style={styles.infoSmall}>
                    <Text style={styles.numbers}>100K</Text>
                    <Text style={styles.subtitle}>followers</Text>
                </View>

                <View style={styles.infoSmall}>
                    <Text style={styles.numbers}>1.8M</Text>
                    <Text style={styles.subtitle}>likes</Text>
                </View>
                <View style={styles.infoSmall}>
                    <Text style={styles.numbers}>13</Text>
                    <Text style={styles.subtitle}>posts</Text>
                </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    numbers: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    subtitle: {
        color: 'grey',
        fontWeight: 'thin',
        fontSize: 14
    },
    infoBig: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    infoSmall: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        backgroundColor: 'pink',
        width: 300,
        height: 300,
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    img: {
        borderRadius: 50,
        marginBottom: 5
    }
})

export default Profile
