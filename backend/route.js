const express = require("express");
const router = express.Router();
const User = require("./Model/User");
const Otp = require("./Model/Otp");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

router.post(
  "/signUp",
  async (req, res) => {
    const { number, name, email, otp } = req.body;
   

    if (!number || !name || !email) {
      return res.status(400).json({
        success: false,
        message: "You should fill required fields",
      });
    }

    try {
      const check_email = await User.findOne({ email });

      if (check_email) {
        return res.status(400).json({ success: false, message: "User already registered" });
      }

      const recentOtp = await Otp.find({ email }).sort({ createdAt: -1 }).limit(1);
      
      if (recentOtp.length === 0 || recentOtp[0].otp !== otp) {
        return res.status(400).json({ success: false, message: "Invalid OTP" });
      }

      const user = await User.create({ name, number, email });

      const payload = {
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

      user.token = token;
      user.password = undefined;

      return res.status(200).json({ success: true, message: "User created", user, token });
    } catch (err) {
      console.error("Error in creating user: ", err);
      return res.status(500).json({ success: false, message: "Unable to create user" });
    }
  }
);





router.post("/login",
[
    body("email","email is invalid").isEmail()
],
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

    const {email, otp}= req.body
       
    if(!email|| !otp) {
        return res.status(400).json({
            success: false,
            message: "You should fill required fields",
          });
    }
    
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Email is not registered",
              });
        }

        const recentOtp = await Otp.findOne({email}).sort({createdAt:-1}).limit(1);

        if (!recentOtp || otp !== recentOtp.otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP",
            });
        }

        const payload = {
            email: user.email,
            id: user._id,
            accountType: user.accountType
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn:"2h"
        });

        return res.status(200).json({
            success: true,
            message: "Logged in Successfully",
            token,
            user
        });
    } catch (err) {
        console.error("Error in login: ", err);
        return res.status(500).json({ success: false, message: "Unable to login user" });
    }
});

router.post("/otp", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email,"EMAIL")
    
    // Generate OTP
    const generatedOTP = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    
    //console.log("Generated OTP is", generatedOTP);
      
    const otpPayload = { email, otp: generatedOTP };
    //console.log("OTP Payload:", otpPayload);

    
    const otpBody = await Otp.create(otpPayload);
    
    
    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      
    });
  } catch (error) {
    console.error("Error in sending OTP:", error);
    return res.status(500).json({
      success: false,
      message: "Error in sending OTP",
    });
  }
});

  module.exports = router;
