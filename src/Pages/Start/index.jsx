import React from "react";

export default function Start(){
    return(
        <View>
            <ScrollView showVerticalScrollIndicator={false}>
                <View>
                    <Image
                        source={require("../../assets/icons/logo3.png")}/>
                    <Text>
                        Vamos Transformar sua vida {"\n"} em um jogo, buscando sempre{"\n"}{""} o melhor nível.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}