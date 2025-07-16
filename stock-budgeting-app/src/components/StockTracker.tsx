import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../services/api';
import { Stock } from '../types';

const StockTracker: React.FC = () => {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadStocks = async () => {
            try {
                const data: Stock[] = await fetchStockData('AAPL'); // Replace 'AAPL' with the desired stock symbol
                setStocks(data);
            } catch (err) {
                setError('Failed to fetch stock data');
            } finally {
                setLoading(false);
            }
        };

        loadStocks();
    }, []);

    const addStock = (newStock: Stock) => {
        setStocks([...stocks, newStock]);
    };

    if (loading) {
        return <div>Loading stocks...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Stock Tracker</h2>
            <ul>
                {stocks.map(stock => (
                    <li key={stock.symbol}>
                        {stock.name} ({stock.symbol}): ${stock.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            {/* Add functionality to add stocks here */}
        </div>
    );
};

export default StockTracker;