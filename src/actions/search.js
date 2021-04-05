import axios from "axios"
import { API_HOST, API_KEY, SEARCH_URL } from "../api/url.constant";
import { SET_RESULTS } from "../constants/action.types"

export const searchVideos = async (searchText) => {
    const options = {
        method: 'GET',
        url: SEARCH_URL + searchText,
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': API_HOST
        }
    };
    const response = await axios.request(options);
    return { type: SET_RESULTS, payload: response.data };
}
