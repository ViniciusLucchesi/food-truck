import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const top = 380
const margemLeft = 35

export const welcome = StyleSheet.create({
    background: {
        width: width,
        height: height,
        backgroundColor: "#918AE3",
    },
    logo: {
        position: "absolute",
        top: 0,
        left: 15,
        width: 450,
        height: 350,
        resizeMode: "contain",
    },
    title: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: top,
        fontSize: 45,
        fontWeight: "bold",
        marginLeft: margemLeft,
        color: "white",
    },
    subtitle: {
        position: "relative",
        fontSize: 35,
        fontWeight: "bold",
    },
    button: {
        position: "absolute",
        top: top + 200,
        width: 100,
        height: 50,
        marginLeft: margemLeft,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5D55B2",
    },
    textButton: {
        color: "#fff",
    },
    text: {
        position: "absolute",
        top: top + 130,
        marginLeft: margemLeft,
        color: "#BBB7F0",
    },

});

export const login = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    avatar: {
        position: "absolute",
        top: 20,
        width: 150,
        height: 150,
        resizeMode: "cover",
        backgroundColor: "#918AE3",
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#5D55B2",
        borderStyle: "solid",
    },
    title: {
        position: "absolute",
        top: 180,
        fontSize: 30,
        fontWeight: 500,
        color: "#918AE3",
    },
    inputContainer: {
        width: width - 50,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderRadius: 10,
        backgroundColor: "#918AE3",
    },
    inputText: {
        color: "#fff",
        paddingTop: 10,
        marginBottom: 10,
    },
    inputField: {
        height: 25,
        color: "#918AE3",
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    button: {
        position: "absolute",
        top: 500,
        width: width - 50,
        height: 35,
        borderRadius: 10,
        borderWidth: 3,        
        borderColor: "#5D55B2",
        borderStyle: "solid",
        backgroundColor: "#5D55B2",
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        color: "#fff",
    }
});

export const home = StyleSheet.create({
    background: {
        width: width,
        height: height,
        backgroundColor: "#fff",
    },
    header: {
        position: "absolute",
        top: 0,
        width: width,
        height: 50,
        padding: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    avatar: {
        width: 35,
        height: 35,
        resizeMode: "cover",
        backgroundColor: "#918AE3",
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#5D55B2",
        borderStyle: "solid",
    },    
    content: {
        position: "absolute",
        top: 50,        
        width: width,
        height: height,
    },
    // Top
    topContent: {
        position: "relative",
        width: "100%",
        height: 150,
        padding: 10,
    },    
    topTitle: {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: 10,
        color: "gray",  
    },
    topCardContent: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        padding: 10,
        width: "100%",
        height: 100,
        borderRadius: 15,
        backgroundColor: "#C3ABE8",
        justifyContent: "space-between",
    },
    topSubtitle: {
        fontSize: 10,
        color: "#fee",
    },
    topFoodTitle: {
        fontSize: 15,
        fontWeight: 500,
        color: "#fff",
    },
    topFood: {
        width: 150,
        height: 150,
        bottom: 40,
        resizeMode: "contain",
    },
    // Bottom
    bottomContent: {
        position: "relative",
        width: "100%",
        height: "100%",
        padding: 10,
    },
    bottomSubtitle: {
        fontSize: 10,
        width: "auto",
        color: "gray",
    },
    cardContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 200,
        marginTop: 15,
        justifyContent: "space-evenly",
    },
    card: {
        position: "relative",
        display: "flex",
        width: 150,
        height: "100%",
        backgroundColor: "#CDBDE5",
        borderRadius: 10,
        alignItems: "center",
    },
    cardFood: {
        width: "90%",
        height: "80%",
        resizeMode: "contain",
    },
    textCard: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 5,
        justifyContent: "center",
        alignItems: "flex-end",
    },
});

export const product = StyleSheet.create({
    search: {
        display: "flex",
        flexDirection: "row",
        margin: 15,   
        height: 35,     
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "gray",
        borderStyle: "solid",
        paddingLeft: 10,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textSearch: {
        marginLeft: 5, 
        color: "gray"
    },
    categoria: {
        display: "flex",
        flexDirection: "row",
        width: 100,
        height: 35,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderStyle: "solid",
        paddingLeft: 10,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    categoriaAtiva: {
        display: "flex",
        flexDirection: "row",
        width: 100,
        height: 35,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#918AE3",
        borderStyle: "solid",
        backgroundColor: "#918AE3",
        paddingLeft: 10,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textAtivo: {
        color: "#fff",
        marginLeft: 5,
    },
    menu: {
        margin: 15,
        height: "100%",
    },
    item: {        
        position: "relative",
        display: "flex",        
        flexDirection: "row",
        marginTop: 25,
        width: "100%",
        height: 100,
        borderRadius: 10,     
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around",
        shadowColor:"gray",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 10
    },
    foodImage: {
        position: "relative",
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
    textContent: {
        position: "relative",
        width: 180,
        height: "100%",
    },
    nomeComida: {
        fontSize: 20,
        fontWeight: 700,
        marginTop: 5,
        marginBottom: 5,
    },
    descricao: {
        fontSize: 12,
        color: "gray",
        marginBottom: 5,
    },
    preco: {
        color: "#99CDAA",
        fontWeight: 500,
    }
});

export const utils = StyleSheet.create({
    tabBar: {
        margin: 10,
        height: 60,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        justifyContent: "center",
        backgroundColor: "#918AE3",
    },
    center: {
        display: "flex",
        justifyContent: "center",
        marginHorizontal: 15,
    },
    spaceBetween: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    }
});