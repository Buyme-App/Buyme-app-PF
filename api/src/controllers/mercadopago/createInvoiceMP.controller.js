const showErrors = require("../../messageConsole");
const { Invoice, Client, Product } = require("../../database/db");

//[{title:"auto gorgo", unit_price:200.25 quantity:2},{title:"toy soldier", unit_price: 350.34 , quantity:3}]  = itemsHard

async function createInvoiceDB(clientId, itemsHard, preferenceId) {
  
  try {
    const result = await Client.findByPk(clientId);
    
    if (result.email === "") return 404;
    else {
      const searchProducts = itemsHard.map(
        async (item) => await Product.findOne({ where: { name: item.title } })
        
      );
      
      let resolve = await Promise.all(searchProducts);

      resolve = resolve.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
      }));

      resolve = resolve.map((item) => ({
        ...item,
        quantity: itemsHard.find((e) => e.title === item.name).quantity,
      }));
      const result1 = await Invoice.create({
        products: resolve,
        total: 0,
        clientId: clientId,
        MPpreferenceId: preferenceId,
        payApproved: false,
        authorizacionCode: 0,
        authorizationMPId: 0,
        readyToDeliver: false,
      });
      if (result1 === null) return 404;
      else return 203;
    }
  } catch (e) {
    showErrors("createInvoiceDB");
    return 404;
  }
}

module.exports = createInvoiceDB;
