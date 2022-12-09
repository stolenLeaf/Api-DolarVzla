import express from 'express'
import bcv from 'bcv-divisas'
const router = express.Router()
router.get('/',(_req,res)=>{
    bcv.bcvDolar().then(data=>{
        res.send(data)
    })
})
export default router
