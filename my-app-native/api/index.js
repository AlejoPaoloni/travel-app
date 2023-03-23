import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {data : {data}} =  await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: bl_lat ? bl_lat : "35.95",
                    tr_latitude: tr_lat ? tr_lat : "36.3",
                    bl_longitude: bl_lng ? bl_lng : "-115.4",
                    tr_longitude: tr_lng ? tr_lng : "-114.95",
                    limit: '30',
                    currency: 'USD',
                    lunit: 'km',
                    lang: 'en_US'
                },
                headers: {
                    'X-RapidAPI-Key': '9ba6c654dcmsh7f409ff6e25a812p14823djsn5feb5cf787a5',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            }
        );

        return data;
    } catch (error) {
        return null;
    }
};