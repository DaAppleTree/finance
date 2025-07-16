import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchStockData = async (symbol: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stocks/${symbol}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching stock data for symbol ${symbol}:`, error);
        throw new Error(`Failed to fetch stock data for ${symbol}`);
    }
};

export const fetchBudgetData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/budget`);
        return response.data;
    } catch (error) {
        console.error('Error fetching budget data:', error);
        throw new Error('Failed to fetch budget data');
    }
};