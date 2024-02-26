import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PageDefault from '../PageDefault';


export default function Login({ navigation }) {
    const [name, onChangeName] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.container}>
            <PageDefault>
                <ImageBackground
                    source={require('../../assets/Patas.png')}
                    style={styles.backgroundImagePatas}
                    imageStyle={{
                        height: 200,
                        left: 250,
                    }}
                >
                    <View style={styles.contentContainer}>
                        <Image source={require('../../assets/Logo-azul.png')} style={styles.image} />
                        <Text style={styles.text}>Já tem conta? Faça seu login:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeName}
                            value={name}
                            placeholder='Digite seu nome completo'
                            placeholderTextColor={'#BCBCBC'}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Digite sua password"
                            placeholderTextColor={'#BCBCBC'}
                        />

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tab')}>
                            <Text style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </PageDefault>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    text: {
        color: "#3772FF",
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: '400',
    },
    contentContainer: {
        gap: 32,
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 150,
    },
    image: {
        alignSelf: 'center',
    },
    backgroundImagePatas: {
        height: '100%',
    },
    input: {
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
        textAlign: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        padding: 12,
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
