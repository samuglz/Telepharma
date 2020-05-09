require('dotenv').config();
const axios = require('axios');

class dbService {
   async getAffiliate(options = {}) {
      const response = await axios.get(`${process.env.BASEAPI}/affiliates`, {
         params: options
      });
      return response.data;
   }

   async getUser(options = {}) {
      const response = await axios.get(`${process.env.BASEAPI}/users`, {
         params: options
      });
      return response.data;
   }

   async getProduct(options = {}) {
      const response = await axios.get(`${process.env.BASEAPI}/products`, {
         params: options
      });
      return response.data;
   }

   async newUser(userData) {
      const response = await axios.post(
         `${process.env.BASEAPI}/register`,
         userData
      );
      return response.data;
   }

   async newProduct(productData) {
      const response = await axios.post(
         `${process.env.BASEAPI}/products`,
         productData
      );
      return response.data;
   }

   async newAffiliate(affiliateData) {
      const response = await axios.post(
         `${process.env.BASEAPI}/affiliates`,
         affiliateData
      );
      return response.data;
   }

   async login(userData) {
      const response = await axios.post(
         `${process.env.BASEAPI}/login`,
         userData
      );
      return response.data;
   }
}

export default dbService;
