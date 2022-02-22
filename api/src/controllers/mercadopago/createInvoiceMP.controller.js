const showErrors = require("../../messageConsole");
const { Invoice} = require("../../database/db");


//[{title:"auto gorgo", unit_price:200.25 quantity:2},{title:"toy soldier", unit_price: 350.34 , quantity:3}]  = itemsHard

async function createInvoiceDB(clientId, itemsHard, valor) {
  
  try {
    const result1 = await Invoice.create({
         clientId: clientId,
         products: itemsHard, 
         total: valor,
       });
       if (result1 === null) return 404;
       else return 203;
  } catch (e) {
          showErrors("createInvoiceDB", e);
          return 404;
    }
      
    }
    
module.exports = createInvoiceDB;
//modificado
//modificado
