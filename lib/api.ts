import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const fetchNotices = async () => {
    const response = await api.get('/notices');
    return response.data;
};

export const fetchEvents = async () => {
    const response = await api.get('/events');
    return response.data;
};

export default api;
