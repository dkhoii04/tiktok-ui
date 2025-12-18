import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (Path2D, options = {}) => {
    const response = await httpRequest.get(Path2D, options);
    return response.data;
};

export default httpRequest;
