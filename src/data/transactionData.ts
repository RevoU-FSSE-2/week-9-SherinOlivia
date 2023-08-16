export interface Itransaction {
    id: number,
    userId: number,
    transactionType: string,
    transactionAmount: number,

}

export let transactions:Itransaction[] = [
    {
        id:1, 
        userId: 1,
        transactionType: "Income", 
        transactionAmount: 1000000, 
    },
    {
        id:2, 
        userId: 1,
        transactionType: "Expense", 
        transactionAmount: 20000, 
    },
    {
        id:3, 
        userId: 2,
        transactionType: "Income", 
        transactionAmount: 100000, 
    },
    {
        id:4, 
        userId: 3,
        transactionType: "Income", 
        transactionAmount: 5000000, 
    },
    {
        id:5, 
        userId: 2,
        transactionType: "Expense", 
        transactionAmount: 5000, 
    },
]