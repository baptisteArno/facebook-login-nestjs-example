import React from "react";
import FacebookLogin from "react-facebook-login";
import * as axios from "axios";
function Login() {
  async function authenticate(access_token) {
    const authResponse = await axios.get(
      "http://localhost:8080/auth/facebook",
      {
        params: { access_token }
      }
    );
  }
  const responseFacebook = async response => {
    authenticate(response.accessToken);
  };

  return (
    <FacebookLogin
      appId=<YOUR_APP_ID>
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}

export default Login;
