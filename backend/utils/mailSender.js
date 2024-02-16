const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async(email,title, body)=>{
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass:process.env.MAIL_PASSWORD
            }
        })

        let info =await transporter.sendMail({
            to:`${email}`,
            from: "Shashant.kashyp999@gmail.com",
            subject:`${title}`,
            html:`Your verification code for login on YOGA-Wellness: ${body}
                        Stay Healthy - Stay Safe....`
        })

        console.log(info);
        return info;
    }catch(err){
        console.log("Error in Sending Email",err.message)
    }
}

module.exports = mailSender