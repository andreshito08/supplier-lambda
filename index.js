const { SupplierService,Supplier } = require('./app');

exports.handler = async(event) => {
    try {
        const {name,email} = JSON.parse(event.body);
        const supplier = new Supplier(name, email);
        const results = await SupplierService.createSupplier(supplier);
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Supplier create.', data: results }),
        };
      } catch (error) {
        console.error('Error creating Supplier', error);
        return {
          statusCode: 500,
          body: JSON.stringify({ message: 'Error creating supplier', error }),
        };
      }
};
