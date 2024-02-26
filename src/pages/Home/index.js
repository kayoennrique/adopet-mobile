import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PageDefault from '../PageDefault';
export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <PageDefault>
                <View style={styles.contentContainer}>
                    <Image source={require('../../assets/Logo.png')} style={styles.image} />
                    <Text style={[styles.text, styles.title]}>Boas-vindas!</Text>
                    <Text style={styles.text}>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</Text>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.textButton}>Cadastro</Text>
                    </TouchableOpacity>

                    <Image source={require('../../assets/CachorroEGato.png')} style={styles.image}></Image>
                </View>
            </PageDefault>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3772FF',
        flex: 1,
    },
    text: {
        color: "white",
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: '400',
    },
    title: {
        fontSize: 26,
        fontWeight: 500,
    },
    contentContainer: {
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 150,
        gap: 32,
    },
    image: {
        alignSelf: 'center',
    },

    button: {
        borderRadius: 8,
        backgroundColor: '#FC7071',
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        padding: 10,
        width: 200,
        alignSelf: 'center',
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});
