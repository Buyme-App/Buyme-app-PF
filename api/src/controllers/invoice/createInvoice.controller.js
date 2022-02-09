const { Invoice, Product } = require("../../database/db");
const showErrors = require("../../messageConsole");

//funcion para la factura, debe recibir desde el front, un array con un objeto por producto con su id y cantidad deseada
// ej.: [{id:1, quantity:2},{id:2, quantity:3}]
//busca los articulos en la DB y genera la factura con los datos de los mismos.
//se usa para los productos JSON.stringify(), se recomienda para el front JSON.parse()
async function createInvoice(clientId, products) {                     //Agrego clientId a parametros 
  try {
    //mapea y busca los productos en la DB
    const searchProducts = products.map(
      async (product) => await Product.findByPk(product.id)
    );

    //lo resuelve
    let resolve = await Promise.all(searchProducts);

    //filtra los productos por la data del producto
    resolve = resolve.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      maker: product.maker,
      model: product.model,
      description: product.description,
      SKU: product.SKU,
    }));

    //añade la cantidad a los productos
    resolve = resolve.map(
      (product) => (
        {
          ...product,
          quantity: products.find((e) => e.id === product.id).quantity,
        }
      )
    );

    //calcula el total
    const total = resolve.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    console.log(total);
    resolve = JSON.stringify(resolve);
    products = resolve;

    //crea la factura
    const createInvoice = await Invoice.create({
      products,
      total,
      date: new Date().toISOString(),          //Agrego date para la fecha de creacion de la factura  
      clientId                                //Agrego client Id para que relaciones con la tabla clients
    });
    return createInvoice;
  } catch (error) {
    showErrors("createInvoice", error);
    return 501, error;
  }
}

module.exports = createInvoice;
