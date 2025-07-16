import React, { useState } from 'react';

const BudgetTracker: React.FC = () => {
    const [budgetItems, setBudgetItems] = useState<{ id: number; name: string; amount: number }[]>([]);
    const [itemName, setItemName] = useState('');
    const [itemAmount, setItemAmount] = useState(0);

    const addBudgetItem = () => {
        if (itemName && itemAmount > 0) {
            const newItem = { id: Date.now(), name: itemName, amount: itemAmount };
            setBudgetItems([...budgetItems, newItem]);
            setItemName('');
            setItemAmount(0);
        }
    };

    const removeBudgetItem = (id: number) => {
        setBudgetItems(budgetItems.filter(item => item.id !== id));
    };

    const totalBudget = budgetItems.reduce((total, item) => total + item.amount, 0);

    return (
        <div>
            <h2>Budget Tracker</h2>
            <input
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={itemAmount}
                onChange={(e) => setItemAmount(Number(e.target.value))}
            />
            <button onClick={addBudgetItem}>Add Item</button>
            <h3>Total Budget: ${totalBudget.toFixed(2)}</h3>
            <ul>
                {budgetItems.map(item => (
                    <li key={item.id}>
                        {item.name}: ${item.amount.toFixed(2)}
                        <button onClick={() => removeBudgetItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BudgetTracker;