
# Nodemailer for Gmail








## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CLIENT_ID`

`CLIENT_SECRET`

`USER`

`REFRESH_TOKEN`

Here, I have used config.js file for these variables.




## Explanation

1. Create your own client with your credentials and set refreshtoken to identify the Oauth user.
2. You can get the `access_token` from the OAuth2_client.

 ```bash
  const access_token = await OAuth2_client.getAccessToken()
```
3. Now create a transporter for the mail with the required details.
4. Create your message using documentation and send it. Bass!!!

