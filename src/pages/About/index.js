import { View, ScrollView, StyleSheet, Image, FlatList, Text } from "react-native";
import PageDefault from "../PageDefault";
import { Link, useRoute } from "@react-navigation/native";
import uuid from 'react-native-uuid';
export default function Sobre({ navigation }) {
    const route = useRoute();
    const { name, image, description, locality } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>
                <PageDefault>
                    <View style={styles.contentContainer}>
                        <Image source={image} style={styles.image} />
                        <Text style={styles.text}>{name}</Text>

                        {
                            description.information.map((item) => <Text style={styles.textList} key={uuid.v4()}>{item}</Text>)
                        }

                        <View style={styles.containerContact}>
                            <Text style={styles.local}>
                                {locality}</Text>
                            <View style={styles.information}>
                                <View style={styles.containerInteractions}>
                                    <Image source={require('../../assets/chat.png')} />
                                    <Link to={{
                                        screen: 'Mensagem', params: {
                                            namePet: name
                                        },
                                    }} style={styles.local}>
                                        Falar com responsável
                                    </Link>
                                </View>

                                <View style={styles.containerInteractions}>
                                    <Image source={require('../../assets/share.png')} />
                                    <Link to={{
                                        screen: 'Mensagem', params: {
                                            namePet: name
                                        },
                                    }} style={styles.local}>
                                        Compartilhar
                                    </Link>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.textSummary}>{description.summary}</Text>

                        {
                            description.fotos.map((item) => <Image source={item} key={uuid.v4()} style={styles.image} />)
                        }
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
        paddingTop: 150,
        marginHorizontal: 40,
        zIndex: 1,
    },
    text: {
        color: "#3772FF",
        fontFamily: 'PoppinsRegular',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        alignSelf: 'center',
    },
    textList: {
        color: '#737380',
        fontSize: 14,
        lineHeight: 20
    },
    containerInteractions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    information: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    local: {
        color: '#737380',
        fontSize: 12,
    },
    containerContact: {
        paddingVertical: 32
    },
    textSummary: {
        color: '#737380',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 24
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 24
    }
});
