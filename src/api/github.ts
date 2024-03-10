
import axios from 'axios';

export const getDeveloperInfo = async (userName: string) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${userName}`);
        return response.data;

    } catch (error) {
        console.error('Error fetching user Info:', error);
    }
}