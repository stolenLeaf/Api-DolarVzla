import express from 'express'
import dolar from 'bcv-divisas'
const router = express.Router()

router.get('/',(_req,res)=>{
    dolar.dtDolar().then(data=>{
        res.send(data)
    })
})
export default router