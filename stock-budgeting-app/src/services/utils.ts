export const calculateTotalBudget = (budgetItems: { amount: number }[]) => {
    return budgetItems.reduce((total, item) => total + item.amount, 0);
};

export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};