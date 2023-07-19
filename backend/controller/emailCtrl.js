// const zimbra = require('node-zimbra');
// const asyncHandler = require('express-async-handler')

// const zimbraConfig = {
//   url: 'https://zimbra.example.com',
//   username: process.env.MAIL_ID,
//   password: process.env.PW,
// };
// const zimbraClient = new zimbra.Client(zimbraConfig);

// const sendEmail =  asyncHandler(async(to, subject, text) => {
//   const email = new zimbra.Email({
//     from: 'user@example.com',
//     to: to,
//     subject: subject,
//     text: text,
//   });

//   return new Promise((resolve, reject) => {
//     zimbraClient.sendMail(email, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// });

// module.exports = {
//   sendEmail
// }