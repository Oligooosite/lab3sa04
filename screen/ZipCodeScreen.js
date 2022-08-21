import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';

const availableZipItems = [
    
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]




const ZipItem = ({place, code, navigation}) => (
    
        <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
            <View>
                <ImageBackground source={require('../bg.jpg')} >
                <Text>                                            {place}</Text>
                <Text> </Text>
                <Text >                                           {code}</Text>
                <Text >____________________________________________________________</Text>
                </ImageBackground>
            </View>
        </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    zipPlace: {
        flex :1,
    },
    zipCode: {
        flex :1,
    }

})

