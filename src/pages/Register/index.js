import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PageDefault from '../PageDefault';

export default function Register() {
    const [name, onChangeName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [confirmPassword, onChangeConfirmPassword] = React.useState('');
    const [email, onChangeEmail] = React.useState('');

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
                        <View>
                            <Text style={styles.text}>Ainda não tem cadastro?</Text>
                            <Text style={styles.text}>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</Text>
                        </View>

                        <View>
                            <Text style={styles.label}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeName}
                                value={name}
                                placeholder='Digite seu nome completo'
                                placeholderTextColor={'#BCBCBC'}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder="Digite seu melhor e-mail"
                                placeholderTextColor={'#BCBCBC'}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>Senha</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangePassword}
                                value={password}
                                placeholder="Crie sua senha"
                                placeholderTextColor={'#BCBCBC'}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>Confirme a senha</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeConfirmPassword}
                                value={confirmPassword}
                                placeholder="Repita a senha criada acima"
                                placeholderTextColor={'#BCBCBC'}
                            />
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Cadastrar</Text>
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
    backgroundImagePatas: {
        height: '100%',
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 150,
    },
    contentContainer: {
        gap: 16,
    },
    image: {
        alignSelf: 'center',
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
    label: {
        color: '#737380',
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center'
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
