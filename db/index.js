const balances ={}
const transactions = []
const unspentPoints = []

const getBalances = () => {
    return balances
}

const addTransaction = (transaction) => {
    transactions.push(transaction)
    insertUnspentPoints(transaction)
    updateBalances(transaction)
    console.log({transactions,unspentPoints})
    return {transactions,unspentPoints}
}

const getTransactions = () => {
    return transactions
}

const insertUnspentPoints = (transaction) =>{
    unspentPoints.push(transaction)
    unspentPoints.sort((a,b)=>{
        const aTime = a.timestamp
        const bTime = b.timestamp
        if (aTime<bTime) return -1
        if (aTime>bTime) return 1
        if (aTime==bTime) return 0  
    })
    return unspentPoints
}

const getUnspentPoints = () =>{
    return unspentPoints
}

const updateBalances = (transaction) => {
    const {payer, points} = transaction
    if (Object.keys(balances).includes(payer)){
        balances[payer]+=points
    }else{
        balances[payer]=points
    }
    return balances
}




module.exports = {
    getBalances, 
    addTransaction, 
    getTransactions,
    getUnspentPoints
}