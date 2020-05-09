const axios = require('axios');
const BASE_API = 'http://localhost:3001';

class dbService {
   async getAffiliate(options = {}) {
      const response = await axios.get(`${BASE_API}/affiliates`, {
         params: options
      });
      return response.data;
   }

   async getUser(options = {}) {
      const response = await axios.get(`${BASE_API}/users`, {
         params: options
      });
      return response.data;
   }

   async getProduct(options = {}) {
      const response = await axios.get(`${BASE_API}/products`, {
         params: options
      });
      return response.data;
   }

   async newUser(userData) {
      const response = await axios.post(`${BASE_API}/register`, userData);
      return response.data;
   }

   async newProduct(productData) {
      const response = await axios.post(`${BASE_API}/products`, productData);
      return response.data;
   }

   async newAffiliate(affiliateData) {
      const response = await axios.post(
         `${BASE_API}/affiliates`,
         affiliateData
      );
      return response.data;
   }

   async login(userData) {
      const response = await axios.post(`${BASE_API}/login`, userData);
      return response.data;
   }
}

module.exports = dbService;
