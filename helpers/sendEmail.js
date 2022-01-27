const mailer = require('nodemailer')
const fs = require('fs')
const mustache = require('mustache')
const path = require('path')

module.exports = async (email, subject, url) => {
  const template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf-8')

  const transporter = mailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const results = {
    subject: subject,
    url: url
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    html: mustache.render(template, { ...results })
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err
    console.log('Email sent: ' + info.response)
  })
}
