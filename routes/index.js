const router = require('express').Router()

const {
    getBalances,
    addTransaction,
    getTransactions, 
    spendPoints
} = require('../db')







router.get('/', (req,res,next)=>{
    res.send({ 
        message:"Points system in working order. We are good to go. "
    })
})


router.post('/transactions', (req, res, next) =>{
    const {payer, points, timestamp} = req.body
    if(!payer || !points || !timestamp){
        res.status(400)
        res.send({
            message:'Bad Request: Missing required parameters'
        })
    }else if(!Number.isInteger(points)){
        res.send({
            message:'You must provide an integer point value'
        })
    }else if(!(typeof payer ==='string' && typeof timestamp==='string' )){
        res.send({
            message:'You must provide an string value for the payer & timestamp'
        })
    }else{
        addTransaction({payer, points, timestamp})
        const transactions = getTransactions()
        res.send( transactions)
    }
})

router.post('/spend', (req, res, next) =>{
    const { points} = req.body
    if(!points ){
        res.status(400)
        res.send({
            message:'Bad Request: Missing required parameters'
        })
    }else if(points<=0){
        res.send({
            message:'You must provide a point value greater than 0'
        })
    }else if(!Number.isInteger(points)){
        res.send({
            message:'You must provide an integer point value'
        })
    }else{
        const spentPoints = spendPoints(points)
        if (spentPoints.length==0){
            res.send({
                message:'Not enough points to spend', 
            })
        }else{
            res.send(spentPoints)
        }
    }
})

router.get('/balances', (req, res, next) =>{
    const balances = getBalances()
    res.send(balances)
})



router.use((error, req, res, next)=>{
    console.error(error)
})


module.exports=router