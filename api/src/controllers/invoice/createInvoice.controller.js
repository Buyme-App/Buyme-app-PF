const { Invoice, Product } = require("../../database/db");
const showErrors = require("../../messageConsole");

//funcion para la factura, debe recibir desde el front, un array con strings/nombres de productos.
//genera la factura con el array de productos, array de los ids, y el total de la factura.
//se pueden agregar los campos necesarios a la factura segun requiera el front.
async function createInvoice(products) {
  try {
    //mapea y busca los productos en la DB
    const searchProducts = products.map(
      async (productName) =>
        await Product.findOne({ where: { name: productName } })
    );
    //lo resuelve
    const searchProductsResolve = await Promise.all(searchProducts);

    //filtra los productos por id
    const productsIds = searchProductsResolve.map((product) => product.id);

    //filtra los precios y los suma
    const total = searchProductsResolve
      .map((product) => product.price)
      .reduce((curr, next) => curr + next);

    //crea la factura
    const createInvoice = await Invoice.create({
      products,
      productsIds,
      total,
    });
    return createInvoice;
  } catch (error) {
    showErrors("createInvoice", error);
    return 501, error;
  }
}

module.exports = createInvoice;
