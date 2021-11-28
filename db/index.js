const balances ={}
const transactions = []

const getBalances = () => {
    return balances
}

const addTransaction = (transaction) => {
    transactions.push(transaction)
}

const getTransactions = () => {
    return transactions
}




module.exports = {
    getBalances, 
    addTransaction, 
    getTransactions
}