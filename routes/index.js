const router = require('express').Router()








router.get('/', (req,res,next)=>{
    res.send({ 
        message:"Points system in working order. We are good to go. "
    })
})


router.use((error, req, res, next)=>{
    console.error(error)
    res.status(500)
    res.send(error)
})


module.exports=router