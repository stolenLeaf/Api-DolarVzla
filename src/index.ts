import express from 'express'
import api from './routes'
const app=express()
const PORT=3000
app.use(express.json())//middleweware que se encarga de convertir la req.body en unJSON
app.use('/api',api)


app.use('/', (_req, res) => {
    res.json({
      mensaje: 'hola mundo'
    })
  })


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})