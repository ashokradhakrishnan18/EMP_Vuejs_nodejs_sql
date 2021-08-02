var path = require("path")

exports.send =  ( req,res) => {
   var nodeMailer = require('nodemailer');
     let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'askvictory2007@gmail.com',
              pass: 'askvict2007'
          }
      });
 
let html = `
 <div>
    <img src="https://thinkbigsoft.com/images/thinkbig_logo_final.png" alt="Logi" width="500" >
        <div><h1>Hi ${req.body.name},</h1>  
    <p> We Hope you are doing good, As you attended the ${req.body.process} round with us we got
         the feedback that We are looking candidate with more stuff and knowledge
        so as of now your profile has been rejected ,in future try to come up with more preparation .
       <br> <br>Human Resources Department,<br><br>
    <img src="https://thinkbigsoft.com/images/thinkbig_logo_final.png" alt="Logi" width="150" >
        <h3 style="color:#002c7f;">ThinkBiG Software Solutions Pvt Ltd</h3> <br>
        Company Website : <p style="color:##0051b8;"><a href="https://thinkbigsoft.com/">www.thinkbigsoft.com</a></p> 
        Telephone : <p style="color:#0051b8;">044 4210 7759</p> Mobile : <p style="color:#0051b8;">+(91) 7448444844</p>
        Email : <a href="mailto:hr@thinkbigsoft.com"><p style="color:#0051b8;">hr@thinkbigsoft.com</p></a>
        </p></div>
</div>
`;

 let mailOptions = {
          from: '"Ashok" <askvictory2007@gmail.com>', // sender address
          to: req.body.emailid, // list of receivers
          subject: req.body.process, // Subject line
        //   text: req.body.body, // plain text body
          html: html ,// html body
      };

  transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.send('Succesfully Mail Sended');
          });
};
