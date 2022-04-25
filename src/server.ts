import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import './database'

const app = express()
app.use(cors())

app.listen(3333, ()=> console.log('server is runing'))
