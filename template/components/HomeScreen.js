import {
    Button,
    Text,
    View,
} from 'react-native';
import React from 'react';
const HomeScreen = ({ navigation }) => {
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
