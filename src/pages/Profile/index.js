import { Image, StyleSheet, Text, View } from "react-native";
import PageDefault from "../PageDefault";
import { ScrollView } from "react-native-gesture-handler";

export default function Profile() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <PageDefault>

                    <View style={styles.contentContainer}>
                        <Text style={styles.text}>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</Text>
                        <View style={styles.profileContainer}>
                            <Text style={styles.profileTitle}>Perfil</Text>
                            <View>
                                <Text style={styles.profileLabel}>Foto</Text>
                                <Image style={styles.profileImage} source={require('../../assets/avatar.png')} />
                                <Text style={styles.profileInfo}>Clique na foto para editar</Text>
                            </View>
                            <View>
                                <Text style={styles.profileLabel}>Nome</Text>
                                <Text style={styles.profileDescription}>Joana Magalhães</Text>
                            </View>
                            <View>
                                <Text style={styles.profileLabel}>Telefone</Text>
                                <Text style={styles.profileDescription}>55 11 XXXXX-XXXX</Text>
                            </View>
                            <View>
                                <Text style={styles.profileLabel}>Cidade</Text>
                                <Text style={styles.profileDescription}>São Paulo</Text>
                            </View>
                            <View>
                                <Text style={styles.profileLabel}>Sobre</Text>
                                <Text style={styles.profileDescription}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</Text>
                            </View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>Editar</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </PageDefault>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    contentContainer: {
        gap: 32,
        paddingTop: 150,
    },
    text: {
        color: "#3772FF",
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: '400',
        marginHorizontal: 67
    },
    profileTitle: {
        fontSize: 21,
        fontWeight: '600',
        color: "#737380",
        fontFamily: 'PoppinsRegular',
        textAlign: 'center',
        marginBottom: 32
    },
    profileLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: "#3772FF",
    },
    profileContainer: {
        backgroundColor: '#F6F6F6',
        padding: 24,
        gap: 24,
        marginHorizontal: 24,
        marginBottom: 24
    },
    profileImage: {
        alignSelf: 'center',
    },
    profileInfo: {
        color: '#FC7071',
        textAlign: 'center',
        fontSize: 12,
    },
    profileDescription: {
        color: '#737380',
        fontSize: 14,
        marginTop: 16,
        marginBottom: 24
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