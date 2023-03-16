import * as Animatable from 'react-native-animatable';

import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { HeroImage } from "../../assets";
import React from "react";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 relative bg-white">
            {/* Logo section */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-20 h-20 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">Let's</Text>
                </View>
                <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
            </View>

            {/* Title */}
            <View className="px-6 mt-6 space-y-3">
                <Text className="text-[#3C6072] text-[40px]">Enjoy the trip with</Text>
                <Text className="text-[#00BCC9] text-[36px] font-bold">Good Moments</Text>
                <Text className="text-[#3C6072] text-base">
                    Live an unforgettable trip without missing the best places.
                </Text>
            </View>
            <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-20 -right-36"></View>
            <View className="w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-28 -left-32"></View>

            {/* Image Container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image animation="fadeIn" easing="ease-in-out" source={HeroImage} className="w-full h-full object-cover mt-12" />

                {/* Button Let's next page */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Discover")}
                    className="absolute bottom-14 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
                    <Animatable.View
                        animation="pulse" easing="ease-in-out" iterationCount="infinite" className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                        <Text className="text-gray-50 text-[30px] font-semibold">Let's</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;