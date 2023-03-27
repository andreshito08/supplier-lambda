const {getConnection} = require('./Connection');

const insertSupplier = async (pupplier) => {
  const connection = await getConnection();
  try {
    const [results] = await connection.execute('CALL sp_supplier_create(?, ?);', [
      pupplier.name,
      pupplier.email
    ]);
    return results;
  } catch (error) {
    throw error;
  } finally {
    connection.end();
  }
};

module.exports = { insertSupplier };
