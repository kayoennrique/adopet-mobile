import { Link } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Card({ name, age, size, image, characteristics, locality, description, navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Sobre', {
                name: name,
                image: image,
                locality: locality,
                description: description,
            })}>
                <Image source={image} />
            </TouchableOpacity>
            <View style={styles.containerInformation}>
                <Text style={styles.title}>{name}</Text>

                <View style={styles.information}>
                    <Text style={styles.informationText}>{age}</Text>
                    <Text style={styles.informationText}>{size}</Text>
                    <Text style={styles.informationText}>{characteristics}</Text>
                </View>

                <View style={styles.information}>
                    <Text style={styles.local}>
                        {locality}</Text>
                    <View style={styles.containerChat}>
                        <Image source={require('../../../assets/chat.png')} />
                        <Link to={{
                            screen: 'Mensagem', params: {
                                namePet: name
                            },
                        }} style={styles.local}>
                            Falar com responsável
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 16,
        paddingHorizontal: 21,
        marginBottom: 16
    },
    title: {
        color: "#3772FF",
        fontWeight: "600",
        lineHeight: 24,
        fontSize: 16,
        marginBottom: 8
    },
    informationText: {
        color: "#737380",
        lineHeight: 20,
        fontSize: 14,
    },
    information: {
        display: 'flex',
        gap: 6,
        fontFamily: 'PoppinsRegular',
        marginBottom: 16
    },
    local: {
        color: "#737380",
        lineHeight: 16,
        fontSize: 12,
    },
    containerChat: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    }

})
