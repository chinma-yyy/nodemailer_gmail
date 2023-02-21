"use strict";
const express = require("express");
const { google } = require("googleapis");
const people = google.people("v1");
const config = require("./config");

const app = express();
const scopes = [
    "https://www.googleapis.com/auth/gmail.modify",
    "https://mail.google.com/"
  ];
/**
 * Create a new OAuth2 client with the configured keys.
 */
const oauth2Client = new google.auth.OAuth2(
  config.clientID,
  config.clientSecret,
  config.redirectURL
);
google.options({ auth: oauth2Client });
const authorizeUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes.join(" "),
});
console.log(authorizeUrl);



app.get("/callback", async (req, res) => {
  const code = req.query.code;
  const all = await oauth2Client.getToken(code);
  console.log(all);
  console.log(all.tokens);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
    });
