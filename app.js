const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const OAuth2 = google.auth.OAuth2

const config = require('./config')

const OAuth2_client = new OAuth2(config.clientID, config.clientSecret)
OAuth2_client.setCredentials({
  refresh_token: config.refreshToken,
})

const send_mail = async (name, receipient) => {
  const access_token = await OAuth2_client.getAccessToken()
  // console.log(access_token);
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: config.user,
      clientId: config.clientID,
      clientSecret: config.clientSecret,
      refreshToken: config.refreshToken,
      accessToken: access_token,
    },
  })

  const mail_options = {
    from: config.user,
    to: receipient,
    subject: 'Testing email',
    text: `Hi ${name}, this is a test email from Node.js`,
  }
// console.log("check");
  transport.sendMail(mail_options, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Email sent successfully', data)
    }
    transport.close()
  })
}

send_mail('Chinmay', 'shewalechinmay54@gmail.com')
