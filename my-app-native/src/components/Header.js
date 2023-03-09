import { StyleSheet, Text, View } from 'react-native';

import COLORS from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

const Header = ({ title }) => {
    return (
        <LinearGradient colors={["#000046", "#1CB5E0"]} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </LinearGradient>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 23,
    }
})
