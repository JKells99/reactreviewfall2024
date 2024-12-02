import axios from "axios";
import {BACKEND_BASE_URL} from "../config/baseurl";

export const fetchBooks = async () => {
    try {
        const response = await axios.get(`${BACKEND_BASE_URL}/listAllBooks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};