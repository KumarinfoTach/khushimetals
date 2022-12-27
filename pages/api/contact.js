// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

require('dotenv').config()


const sgMail=require('@sendgrid/mail')

const{SG_API_KEY,FROM_EMAIL,TO_EMAIL}=process.env
sgMail.setApiKey(SG_API_KEY)
export default async function handler(req, res) {
  const{name,email,message} =req.body
  const msg={
    to:TO_EMAIL,
  from:FROM_EMAIL,
  subject:"sendmail send grid",
  html:`<p><strong>Name:</strong>${name}</p>
  <p><strong>Email:</strong>${email}</p>
  <p><strong>Name:</strong>${message}</p>
  
  `
  };
  await sgMail.send(msg)
  console.log("email sent");
  res.status(200).json({ success: true });
  
}
