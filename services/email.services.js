const nodemailer = require('nodemailer');

const {EMAIl_PASSWORD} = require("../config/config");


const sendEmail = (applicantMail)=> {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bebeshkoevgenia@gmail.com',
            pass: EMAIl_PASSWORD
        }
    })
    return transporter.sendMail ({
        from: 'JapanDev',
        to: applicantMail,
        subject: 'Сhanges in the job database',
        html: '<div>Hello</div>'
    })
};

module.exports = {
    sendEmail
}





