import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Mock data for development
export const fetchNotices = async () => {
    // Return mock data instead of API call for now
    return [
        { id: 1, title: 'Admission Notification 2025-26 (Offline)', date: 'Nov 20, 2025' },
        { id: 2, title: 'Semester Examination Schedule Released', date: 'Nov 18, 2025' },
        { id: 3, title: 'Holiday Notice - University Closed on Dec 25', date: 'Nov 15, 2025' },
        { id: 4, title: 'Research Symposium 2025 - Call for Papers', date: 'Nov 10, 2025' },
    ];
};

export const fetchEvents = async () => {
    // Return mock data instead of API call for now
    return [
        { id: 1, title: 'Annual Sports Meet', date: '15', month: 'DEC', location: 'University Stadium' },
        { id: 2, title: 'Cultural Festival', date: '20', month: 'DEC', location: 'Main Auditorium' },
        { id: 3, title: 'Guest Lecture Series', date: '05', month: 'JAN', location: 'Conference Hall' },
    ];
};

export default api;
