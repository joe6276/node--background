import express from 'express'
const app= express()
import emailService from './emailService/email'

const run= async()=>{
await emailService()
}

run()
app.listen(6050, ()=>{
    console.log('Listening to server');
    
})