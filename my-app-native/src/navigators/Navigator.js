import Discover from "../screens/Discover";
import HomeScreen from "../screens/HomeScreen";
import ItemScreen from "../screens/ItemScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Discover" component={Discover} />
                <Stack.Screen name="ItemScreen" component={ItemScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ShopNavigator;
