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
    topContent: {
        position: "relative",
        width: "100%",
        height: 150,
        padding: 10,
    },    
    title: {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: 10,
        color: "#000",  
    },
    topCardContent: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        padding: 10,
        width: "100%",
        height: "100%",
        borderRadius: 15,
        backgroundColor: "#C0A9E5",
        justifyContent: "space-between",
    },
    subtitle: {
        fontSize: 10,
        color: "#fee",
    },
    topFoodTitle: {
        fontSize: 15,
        fontWeight: 500,
        color: "#fff",
    },
    food: {
        width: 150,
        height: "auto",
        bottom: 15,
        resizeMode: "cover",
    },
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
});