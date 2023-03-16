import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemScreen = ({ route }) => {
    const navigation = useNavigation();

    const data = route?.params?.param;

    return (
        <SafeAreaView className="relative flex-1 bg-white">
            <ScrollView className="flex-1 px-4 py-6">

                {/*Image*/}
                <View className="relative shadow-lg">
                    <Image className="w-full h-64 object-cover rounded-2xl" source={{
                        uri:
                            data?.photo?.images?.large?.url ?
                            data?.photo?.images?.large?.url :
                            "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                    }}
                    />

                    <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                        <TouchableOpacity onPress={() => navigation.navigate("Discover")} className="w-10 h-10 rounded-md items-center justify-center bg-white">
                            <FontAwesome name="chevron-left" size={24} color="#06B2BE" />
                        </TouchableOpacity>
                        <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                            <FontAwesome name="heartbeat" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
                        <View className="flex-row space-x-2 items-center">
                            <Text className="text-[12px] font-bold text-gray-100">
                                {data?.price_level}
                            </Text>
                            <Text className="text-[32px] font-bold text-gray-100">
                                {data?.price}
                            </Text>
                        </View>

                        <View className="px-2 py-1 rounded-md bg-teal-100">
                            <Text>
                                {data?.open_now_text}
                            </Text>
                        </View>
                    </View>
                </View>

                {/*Name and Location*/}
                <View className="mt-6">
                    <Text className="text-[#428288] text-[24px] font-bold">
                        {data?.name}
                    </Text>
                    <View className="flex-row items-center space-x-2 mt-2">
                        <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
                        <Text className="text-[#8C9EA6] text-[20px] font-bold">
                            {data?.location_string}
                        </Text>
                    </View>
                </View>

                {/*Description*/}
                <View className="flex-1 items-center justify-center mt-4">
                    <Text className="text-[#3C6072] text-[14px] font-semibold">
                        {data?.description}
                    </Text>
                </View>

                {/*Contact*/}
                <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
                    <View className="flex-row items-center space-x-6">
                        <FontAwesome name="phone" size={20} color="#8C9EA6" />
                        <Text className="text-[16px]">
                            {data?.phone}
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-6">
                        <MaterialIcons name="mail" size={20} color="#8C9EA6" />
                        <Text className="text-[16px]">
                            {data?.email}
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-6">
                        <FontAwesome name="map-pin" size={20} color="#8C9EA6" />
                        <Text className="text-[16px]">
                            {data?.address}
                        </Text>
                    </View>
                </View>

                {/*Reserve*/}
                <View className="pb-16">
                    <TouchableOpacity className="mt-4 py-4 rounded-lg items-center bg-[#06B2Be]">
                        <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">Book Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ItemScreen;
