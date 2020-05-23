const axios = require('axios');
const BASE_API = 'https://telepharma.herokuapp.com';

class dbService {
   async getAffiliate(field = {}) {
      try {
         const response = await axios.get(`${BASE_API}/affiliates`, {
            params: field
         });
         return response;
      } catch (error) {
         return error.response;
      }
   }

   async getUser(field = {}) {
      try {
         const response = await axios.get(`${BASE_API}/users`, {
            params: field
         });
         return response;
      } catch (error) {
         return error.response;
      }
   }

   async getProduct(field = {}) {
      try {
         const response = await axios.get(`${BASE_API}/products`, {
            params: field
         });
         return response;
      } catch (error) {
         return error.response;
      }
   }

   async newUser(userData) {
      try {
         const response = await axios.post(`${BASE_API}/register`, userData);
         return response;
      } catch (error) {
         return error.response;
      }
   }

   async newProduct(productData) {
      try {
         const response = await axios.post(`${BASE_API}/products`, productData);
         return response;
      } catch (error) {
         return error.response;
      }
   }

   async newAffiliate(affiliateData) {
      try {
         const response = await axios.post(
            `${BASE_API}/affiliates`,
            affiliateData
         );
         return response;
      } catch (error) {
         return error.response;
      }
   }

   async login(userData) {
      try {
         const response = await axios.post(`${BASE_API}/login`, userData);
         return response.data;
      } catch (error) {
         return error.response;
      }
   }

   async update(userData) {
      try {
         const response = await axios.put(
            `${BASE_API}/users/${userData.id}`,
            userData
         );
         return response;
      } catch (error) {
         return error.response;
      }
   }
}

module.exports = dbService;
