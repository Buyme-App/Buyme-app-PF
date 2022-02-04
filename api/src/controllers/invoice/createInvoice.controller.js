const { Invoice, Product } = require("../../database/db");
const showErrors = require("../../messageConsole");

//funcion para la factura, debe recibir desde el front, un array con strings/nombres de productos y un total de facturacion
//busca los articulos en la DB y genera la factura con los datos de los mismos.
//se usa para los productos JSON.stringify(), se recomienda para el front JSON.parse()
async function createInvoice(products, total) {
  try {
    //mapea y busca los productos en la DB
    const searchProducts = products.map(
      async (productName) =>
        await Product.findOne({ where: { name: productName } })
    );

    //lo resuelve
    let resolve = await Promise.all(searchProducts);

    //filtra los productos por id
    resolve = resolve.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      maker: product.maker,
      model: product.model,
      description: product.description,
      SKU: product.SKU,
    }));
    resolve = JSON.stringify(resolve);
    products = resolve;

    //crea la factura
    const createInvoice = await Invoice.create({
      products,
      total,
    });
    return createInvoice;
  } catch (error) {
    showErrors("createInvoice", error);
    return 501, error;
  }
}

module.exports = createInvoice;
