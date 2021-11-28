const router = require('express').Router()








router.get('/', (req,res,next)=>{
    res.send({ 
        message:"We are good to go"
    })
})


module.exports=router