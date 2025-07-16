import React from 'react';
import BudgetTracker from './BudgetTracker';
import StockTracker from './StockTracker';
import './app.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <h1>Stock Budgeting App</h1>
            <BudgetTracker />
            <StockTracker />
        </div>
    );
};

export default App;