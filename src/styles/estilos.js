import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10,
    },
    text: {
        color: "darkg"
    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: "contain",
        marginTop: 100,
        marginBottom: 50,
    },
    botao: {
        backgroundColor: "#F57A01",
        paddingVertical: 10,
        paddingHorizontal: 25,        
        borderRadius: 5,
    },
    textoBotao: {
        color: "white",
    },
    botaoSecundario: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "gray",
        paddingVertical: 10,
        paddingHorizontal: 25,        
        borderRadius: 5,
    },
    textoBotaoSecundario: {
        color: "gray",
    },
    footer: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom:100,
    },
    footerContent: {
        flexDirection: "row",
        justifyContent: "center",
    },
    space: {
        width: 25,
    },
});
