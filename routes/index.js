const router = require('express').Router()








router.get('/', (req,res,next)=>{
    res.send({ 
        message:"Points system in working order. We are good to go. "
    })
})


router.post('/transactions', (req, res, next) =>{
    res.send({ 
        message:"POST:/transactions"
    })
})

router.post('/spend', (req, res, next) =>{
    res.send({ 
        message:"POST:/spend"
    })
})

router.get('/balances', (req, res, next) =>{
    res.send({ 
        message:"GET:/balances"
    })
})







router.use((error, req, res, next)=>{
    console.error(error)
    res.status(500)
    res.send(error)
})


module.exports=router