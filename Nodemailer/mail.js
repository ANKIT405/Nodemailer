let nodemailer=require("nodemailer")

async function sendMail() {
 let transporter=   nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"a60454605@gmail.com",
            pass:"oxmddwpqatpkadux"
        }
    })

let mailOptions={
    from:"a60454605@gmail.com",
    to:"kankit3734@gmail.com",
    subject:"welcome to Node.js App",
    text:"this is an email using nodemailer in Node.js testing again",
}
try{
let result= await transporter.sendMail(mailOptions)
console.log("Email send successfully")
}
catch(err){
console.log("Email send failed with error",err)
}
}

sendMail()