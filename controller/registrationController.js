const mongoose = require("mongoose");
const Registration = mongoose.model("registration");
// const Registration = require('../models/registration')
const bcrypt = require("bcrypt");
const bcryptp = require("../utility/password");
const nodemailer = require('nodemailer');

const SendOtp = require('sendotp');
const sendOtp = new SendOtp('MSG91');
exports.Registration = async (req, res, next) => {
  console.log("coming herefffffffffffffffffffff", req.body);
  try {
    let obj = {
      FirstName: req.body.FirstName,
      lastName: req.body.lastName,
      user_name: req.body.user_name,
      category: req.body.category,
      DOB: req.body.DOB,
      email: req.body.email,
      Password: req.body.Password,
      rePassword: req.body.rePassword,
      termAndCondition: req.body.termandcondition,
      mob_no: req.body.Mob_no,
    };

    console.log("obj :>> ", obj);

    if (
      !obj.FirstName ||
      !obj.lastName ||
      !obj.user_name ||
      !obj.category ||
      !obj.DOB ||
      !obj.email ||
      !obj.Password ||
      !obj.rePassword ||
      !obj.termAndCondition ||
      !obj.mob_no
    ) {
      res.send({ message: "please fill all the require field!" });
    }

    if (
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        String(obj.email).toLowerCase()
      ) != true
    ) {
      res.send({ message: "Please enter valid email!" });
      return;
    }

    if (obj.Password != obj.rePassword) {
      res.send({ message: "Password should be same!" });
    }

    if (obj.Password.length < 6) {
      errors.push({ msg: "password atleast 6 characters" });
    } else {
      await Registration.findOne(
        { email: obj.email },
        async function (err, data) {
          var err;
          if (err) throw err;
          if (data) {
            console.log("User Exists");
            err = "User Already Exists with this Email...";
            return res.status(200).json({ success: false, message: err });
          } else {
            let encriptPass = await bcryptp.bcryptPass(obj.Password);
            if (encriptPass) {
              if (err) throw err;
              const registration = new Registration();
              registration.FirstName = obj.FirstName;
              registration.lastName = obj.lastName;
              registration.user_name = obj.user_name;
              registration.category = obj.category;
              registration.DOB = obj.DOB;
              registration.email = obj.email;
              registration.Password = encriptPass;
              registration.termAndCondition = obj.termAndCondition;
              registration.mob_no = obj.mob_no;
              registration.date = obj.date;
              registration.save();
              if (registration) {
                return res
                  .status(200)
                  .json({
                    success: true,
                    message: "Success",
                    data: registration,
                  });
              } else {
                return res.status(404).json({ success: false, message: "err" });
              }
            }
          }
        }
      );
    }
  } catch (e) {
    return res.status(500).json({ success: false, message: e.message });
  }
};
async  function generateOTP() { 
  var digits = '0123456789'; 
  let OTP = ''; 
  for (let i = 0; i < 4; i++ ) { 
      OTP += digits[Math.floor(Math.random() * 10)]; 
  } 
  return OTP; 
} 

let emailOtp;
exports.sendOtp = async (req, res, next) => {
  console.log("coming  in send otp",req.params.otpEmail);

  try {
    let otp = await generateOTP()
    emailOtp = otp;
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: 'subodh.shipgig@gmail.com',
        pass: 'Smishra@7878'
      }
    });
    var mailOptions = {
      //from: 'subodh.shipgig@gmail.com',
     // to: req.params.email,
      to: req.params.otpEmail,
      subject: "Otp for registration is: ",
      html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + emailOtp +"</h1>" // html body
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
     if(info.messageId){
      return res.status(200).json({ success: true, message: "Otp Send Successfully" });
     }
     else{
      return res.status(200).json({ success: false, message:"Otp not Send" });
     }
  }); 
  } catch (e) {
    return res.status(200).json({ success: false, message:"Otp not Send"  });
  }
};

exports.varifyOtp = async (req, res, next) => {
  console.log("coming  in send otp",req.params.otpNumber);
  console.log("allready otp",emailOtp);
  try {
    if(req.params.otpNumber==emailOtp){

      // setTimeout(()=>{

      // },5000)
      return res.status(200).json({ success: false, message:"otp is correct"  });
  }
  else{
      return res.status(200).json({ success: false, message:"otp is incorrect"  });
  }
  } catch (e) {
    return res.status(200).json({ success: false, message:"Otp not Send"  });
  }
};


exports.upDateTeacher = async (req, res, next) => {
  console.log("upDateTeacher :>> ", req.body);
  let obj = {
    FirstName: req.body.First_Name,
    lastName: req.body.Last_Name,
    DOB: req.body.dob,
    email: req.body.Email,
    mob_no: req.body.mob_no,
    fewWord: req.body.fewWord,
  };
  Registration.findByIdAndUpdate({ _id: req.body.id }, obj).then(
    (user, err) => {
      if (err) {
        console.log(err);
        return res.status(200).json({ success: false, message: "failed" });
      } else {
        return res
          .status(200)
          .json({ success: true, message: "Success", data: user });
      }
    }
  );
};
