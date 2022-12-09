import express from 'express'
import bcvRouter from './bcv'
import dolarTodayRouter from './dolarToday'
const router = express.Router()

router.use('/bcv',bcvRouter)
router.use('/dolarToday',dolarTodayRouter)


export default router