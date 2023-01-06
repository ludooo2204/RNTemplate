import {
    Button,
    Text,
    View,
} from 'react-native';
import React, { useEffect } from 'react';
import initDatabase from '../Services/initDatabase';
const HomeScreen = ({ navigation }) => {
    useEffect(() => { initDatabase() }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color: "black" }}>
            <Text>Fitness</Text>
            <Button
                title="Séance de gainage"
                onPress={() => navigation.navigate('Gainage')}
            />
        </View>
    );
}

export default HomeScreen;
