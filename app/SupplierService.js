const { insertSupplier } = require('./SupplierModel');

class SupplierService {
  static async createSupplier(supplier) {
    try {
      const results = await insertSupplier(supplier);
      return results;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SupplierService;