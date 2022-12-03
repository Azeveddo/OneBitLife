import React from "react";
import {ScrollView, View, StyleSheet, Text} from "react-native";

import DefaultButton from "../../Components/Common/DefaultButton";
import ExplanationCard from "../../Components/Explanation/ExplanationCard";


export default function AppExplanation() {

    function handleSetShowHome() {
        console.log("Botão clicado");
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <ExplanationCard />
                    <Text style={styles.descriptionCta}>
                        Pronto(a) para subir de nível na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela vocÊ vai poder escolher{"\n"} seus 4 hábitos de forma invidivual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleSetShowHome}
                        width={250}
                        height={50}
                    >
                    </DefaultButton>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgba(21,21,21, 0.98)",
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        marginVertical:40,
    },
    descriptionCta:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        marginTop:20,
        marginBottom:10,
    },
    description:{
        color:"white",
        marginBottom:30,
        textAlign:"center",
    },
});