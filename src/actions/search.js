import axios from "axios";
import { SET_RESULTS } from "../constants/action.types";

export const searchVideos = async (searchText) => {
    const options = {
        method: 'GET',
        url: process.env.REACT_APP_SEARCH_URL + searchText,
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            'x-rapidapi-host': process.env.REACT_APP_API_HOST
        }
    };
    const response = await axios.request(options);
    return { type: SET_RESULTS, payload: response.data };
}
