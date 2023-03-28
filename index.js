const { SupplierService,Supplier } = require('./app');

exports.handler = async(event) => {
    try {
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
          statusCode: 200,
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
