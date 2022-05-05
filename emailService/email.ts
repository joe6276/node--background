import dotenv from 'dotenv'
dotenv.config()
import ejs from 'ejs'
import sendMail from '../helper/Email'
 const emailService=async()=>{
    ejs.renderFile('./templates/registration.ejs', {name:'Benjamin'}, async(error,data)=>{
        const mailoptions={
            from:process.env.EMAIL as string,
            to :'joendambuki16@gmail.com',
            subject:'Test Email',
            text:'Hello we testing Nodemailer...',
            html:data
        }
        
       try {
       await sendMail(mailoptions)
        console.log("Success");
        
       } catch (error) {
           console.log(error);
           
       }
    })
 }
export default emailService