require('dotenv').config();
const { SupplierService,Supplier } = require('./app');

exports.handler = async(event) => {
    try {
      const validateKey = authMiddleware(event);
      
      if(!validateKey){
        return {
          statusCode: 401,
          message: 'No autorizado'
        };
      }

      const {name,email} = event.body;
      if (!name) {
        return {
          statusCode: 400,
          message: 'name requerido',
        };
      }else if (!email) {
        return {
          statusCode: 400,
          message: 'email requerido',
        };
      }
      const supplier = new Supplier(name, email);
      await SupplierService.createSupplier(supplier);
      return {
        statusCode: 201,
        message: 'Supplier create.'
      };
    } catch (error) {
      console.error('Error creating Supplier', error);
      return {
        statusCode: 500,
        message: 'Error creating supplier', 
        error: error,
      };
    }
};

const authMiddleware = (req) => {
  const authHeader = req.headers.api_key;
  if (authHeader && authHeader == process.env.API_KEY) {
      return true;
  }
}