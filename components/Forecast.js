import React from 'react';
import { View, Text } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            
            <Text>Adresss : {props.name} </Text>
            <Text>  </Text>
            <Text>Today's weather is :{props.main}</Text>
            <Text>  </Text>
            <Text>Description :{props.description}</Text>
            <Text>  </Text>
            <Text>Temperature :{props.temp}°C</Text>
            <Text>  </Text>
            <Text>Pressure :{props.pressure}</Text>
            <Text>  </Text>
            <Text>Humidity :{props.humidity}</Text>
            
            </View>
        )
   }