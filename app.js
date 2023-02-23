const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;

const config = require("./config");

const send_mail = async (text, receipient) => {
  // const OAuth2_client = new OAuth2(config.clientID, config.clientSecret);
  // console.log(OAuth2_client);
  // console.log(config.refreshToken);
  // OAuth2_client.setCredentials({
  //   refresh_token: config.refreshToken,
  // })
  console.log("done idhar tak");
  // const access_token = await OAuth2_client.getAccessToken();
  // console.log(access_token.token);

  // console.log("error");
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: config.user,
      clientId: config.clientID,
      clientSecret: config.clientSecret,
      refreshToken: config.refreshToken,
      accessToken: config.accessToken,
    },
  });
  const mail_options = {
    from: config.user,
    to: receipient,
    subject: "Testing email",
    text: text
  };
  console.log("check");
  transport.sendMail(mail_options, (err, data) => {
    if (err) {
      console.log("Send err :"+err);
      console.log(data);
    } else {
      console.log("Email sent successfully", data);
    }
    transport.close();
  });
};

send_mail("Greetings Everyone,\n\n\tLets see this message if  ", "shewalechinmay23@gmail.com");
