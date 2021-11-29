const balances ={}
const transactions = []
const unspentPoints = []

const getBalances = () => {
    return balances
}

const getTransactions = () => {
    return transactions
}

const getUnspentPoints = () =>{
    return unspentPoints
}

const getTotalUnspentPoints = () => {
    let totalPoints = 0
    unspentPoints.forEach((transaction)=>{
        totalPoints += transaction.points
    })
    return totalPoints
}

const addTransaction = (transaction) => {
    transactions.push(transaction)
    insertUnspentPoints(transaction)
    updateBalances(transaction)
    return {transactions,unspentPoints}
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


const updateBalances = (transaction) => {
    const {payer, points} = transaction
    if (Object.keys(balances).includes(payer)){
        balances[payer]+=points
    }else{
        balances[payer]=points
    }
    return balances
}

const spendPoints = (points) => {
    if (points>getTotalUnspentPoints()){
        return []
    }
    const spentTotals = {}
    while (points>0){
        const transaction = unspentPoints.shift()
        let transactionPoints = transaction.points
        let _spentPoints = transactionPoints
        
        if(points<transaction.points){
            transaction.points -= points
            addTransaction(transaction)
            updateBalances({payer:transaction.payer,points:-transaction.points})
            _spentPoints = points
        }

        points -= transactionPoints
        updateBalances({payer:transaction.payer,points:-_spentPoints})
        
        if (Object.keys(spentTotals).includes(transaction.payer)){
            spentTotals[transaction.payer]-=_spentPoints
        }else{
            spentTotals[transaction.payer]=-_spentPoints
        }
    }
    return Object.entries(spentTotals)
}



module.exports = {
    getBalances, 
    addTransaction, 
    getTransactions,
    getUnspentPoints, 
    spendPoints
}