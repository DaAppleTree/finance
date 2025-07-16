export interface BudgetItem {
    id: string;
    name: string;
    amount: number;
    date: Date;
}

export interface Stock {
    symbol: string;
    name: string;
    price: number;
    quantity: number;
}

export interface Portfolio {
    stocks: Stock[];
    totalValue: number;
}