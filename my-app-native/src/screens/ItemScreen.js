import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemScreen = ({ route }) => {
    const navigation = useNavigation();

    const data = route?.params?.param;

    return (
        <SafeAreaView className="relative flex-1 bg-white">
            <ScrollView className="flex-1 px-4 mt-3 py-6">

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
                    </View>

                    <View className="absolute flex-row inset-x-0 bottom-5 px-6">
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
                    <View className="flex-row items-center space-x-2 mt-2 px-1">
                        <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
                        <Text className="text-[#8C9EA6] text-[20px] font-bold">
                            {data?.location_string}
                        </Text>
                    </View>
                </View>

                <View className="mt-4 flex-row items-center justify-between">
                    {data?.rating && (
                        <View className="flex-row items-center space-x-2">
                            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                                <FontAwesome name="star" size={24} color="#ffbf00" />
                            </View>
                            <View>
                                <Text className="text-[#515151]">
                                    {data?.rating}
                                </Text>
                                <Text className="text-[#515151]">
                                    Ratings
                                </Text>
                            </View>
                        </View>
                    )}

                    {data?.price && (
                        <View className="flex-row items-center space-x-2">
                            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                                <MaterialIcons name="attach-money" size={24} color="#2f7130" />
                            </View>
                            <View>
                                <Text className="text-[#515151]">
                                    {data?.price}
                                </Text>
                                <Text className="text-[#515151]">
                                    Price
                                </Text>
                            </View>
                        </View>
                    )}

                    {data?.bearing && (
                        <View className="flex-row items-center space-x-2">
                            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                                <FontAwesome5 name="map-signs" size={24} color="black" />
                            </View>
                            <View>
                                <Text className="text-[#515151] capitalize">
                                    {data?.bearing}
                                </Text>
                                <Text className="text-[#515151]">
                                    Bearing
                                </Text>
                            </View>
                        </View>
                    )}
                </View>

                {data?.description && (
                    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
                        {data?.description}
                    </Text>
                )}

                {data?.cuisine && (
                    <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
                        {data?.cuisine.map((n) => (
                            <View
                                className="px-2 py-1 rounded-md bg-emerald-100"
                                key={n.key}>
                                <Text>{n.name}</Text>
                            </View>
                        ))}
                    </View>
                )}

                <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
                    {data?.phone && (
                        <View className="items-center flex-row space-x-6">
                            <FontAwesome name='phone' size={24} color="#428288" />
                            <Text className="text-lg">{data?.phone}</Text>
                        </View>
                    )}
                    {data?.email && (
                        <View className="items-center flex-row space-x-6">
                            <MaterialIcons name='mail' size={24} color="#428288" />
                            <Text className="text-lg">{data?.email}</Text>
                        </View>
                    )}
                    {data?.address && (
                        <View className="items-center flex-row space-x-6 mb-4">
                            <FontAwesome name='map-pin' size={24} color="#428288" />
                            <Text className="text-lg">{data?.address}</Text>
                        </View>
                    )}

                    <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
                        <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
                            ¡ Book Now !
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ItemScreen;
