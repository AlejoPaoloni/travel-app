import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../../assets";
import React, { useEffect, useState } from "react";

import { FontAwesome } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ItemCardContainer from "../components/ItemCardContainer";
import MenuContainer from "../components/MenuContainer";
import { getPlacesData } from "../../api";

const Discover = () => {

    const [type, setType] = useState("restaurants");
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getPlacesData().then((data) => {
            setMainData(data);
            setInterval(() => {
                setIsLoading(false);
            }, 2000);
        });
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row items-center justify-between px-8 mt-7">
                <View>
                    <Text className="text-[38px] text-[#0B646B] font-bold">Discover</Text>
                    <Text className="text-[32px] text-[#527283]">the beauty today</Text>
                </View>

                <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                    <Image
                        source={Avatar}
                        className="w-full h-full rounded-md object-cover"
                    />
                </View>
            </View>
            <View className="flex-row items-center shadow-lg mx-4 rounded-xl py-1 px-2 mt-4">
                <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    placeholder='Search'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(details?.geometry?.viewport);
                    }}
                    query={{
                        key: 'AIzaSyD2YGNGVuA9mHe0Y3F2eGNyyHDbPy68YUA',
                        language: 'en',
                    }}
                />
            </View>

            {/*Menu container */}
            {isLoading ? <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#0B6468" />
            </View> :
                <ScrollView>
                    <View className="flex-row items-center justify-between px-8 mt-4">
                        <MenuContainer
                            key={"hotel"}
                            title="Hotels"
                            imageSrc={Hotels}
                            type={type}
                            setType={setType}
                        />
                        <MenuContainer
                            key={"attractions"}
                            title="Attractions"
                            imageSrc={Attractions}
                            type={type}
                            setType={setType}
                        />
                        <MenuContainer
                            key={"restaurants"}
                            title="Restaurants"
                            imageSrc={Restaurants}
                            type={type}
                            setType={setType}
                        />
                    </View>

                    {/*Top Tips Container*/}
                    <View>
                        <View className="flex-row items-center justify-between px-5 mt-8">
                            <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
                            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                                <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
                                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
                            </TouchableOpacity>
                        </View>

                        {/*Places Card*/}
                        <View className="px-2 mt-8 flex-row items-center justify-evenly flex-wrap">
                            {mainData?.length > 0 ? (
                                <>
                                    {mainData?.map((data, i) => (
                                        <ItemCardContainer 
                                        key={i} 
                                        imageSrc={
                                            data?.photo?.images?.medium?.url ?
                                            data?.photo?.images?.medium?.url : 
                                            "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                                        }
                                            title={data?.name}
                                            location={data?.location_string}
                                            data={data}
                                        />
                                    ))}
                                </>
                            ) : (
                                <>
                                
                                {/*No data found*/}
                                    <View className="w-full h-[300px] items-center justify-center space-y-8">
                                        <Image
                                            source={NotFound} className="w-32 h-32 object-cover" />
                                        <Text className="text-2xl text-[#428288] font-semibold">
                                            Opps... No Data Found
                                        </Text>
                                    </View>
                                </>
                            )}
                        </View>
                    </View>
                </ScrollView>
            }
        </SafeAreaView>
    );
};

export default Discover;
