const jwt = require('jsonwebtoken');
const apiService = require('./databaseService.js');

const existToken = () => {
   if (
      localStorage.getItem('accessToken') !== '' &&
      localStorage.getItem('accessToken') !== null
   ) {
      return true;
   }
   return false;
};

const autoLogin = async () => {
   const api = new apiService();
   const userData = {
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password')
   };
   let response = await api.login(userData);
   if (response.accessToken) {
      localStorage.setItem('accessToken', response.accessToken);
      return true;
   }
   return false;
};

const isExpired = () => {
   const { exp } = decode(localStorage.getItem('accessToken'));
   const date = parseInt(Date.now() / 1000);
   return date > exp;
};

export const decode = token => {
   return jwt.decode(token);
};

export const verifyToken = () => {
   let auth = false;
   if (!existToken()) {
      auth = false;
      return auth;
   }
   if (isExpired()) {
      auth = false;
      return auth;
   }
   auth = autoLogin();
   return auth;
};

export const storageAuth = data => {
   const { accessToken, email, password } = data;
   localStorage.setItem('accessToken', accessToken);
   localStorage.setItem('email', email);
   localStorage.setItem('password', password);
};
