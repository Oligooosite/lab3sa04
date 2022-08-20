import React from "react"

export default function Forecast(props){
    return{
        <View>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text>{props.temp}</Text>
            <Text>°C</Text>
        </View>
    }
}