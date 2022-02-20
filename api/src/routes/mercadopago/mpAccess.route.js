const { Router } = require("express");
const router = Router();
const bodyParser = require("body-parser");
// const { SELLER_ACCESS_TOKEN } = process.env;

//llamas a la sdk de mercadopago ya instalada
const mercadopago = require("mercadopago");
const showErrors = require("../../messageConsole");
const createInvoiceDB = require("../../controllers/mercadopago/createInvoiceMP.controller");

router.use(bodyParser.urlencoded({ extended: false }));

//Agregar credenciales de mercado pago   credencial de prueba (pero produccion) del vendedor
mercadopago.configure({
  access_token: 'APP_USR-795368609311295-020422-fae769e7be0de3e4c4c28f63f524af45-1068887150',
});



router.post("/", async (req, res) => {
  // Crea un objeto de preferencia que se envia a mercado pago
  
 let {clientId, itemsHard} = req.body;

//  let [id, title, unit_price, quantity] = itemsHard
 
 if(!itemsHard || itemsHard !== undefined){
  console.log('>>>>>>>>>', itemsHard)
    let itemsMp = itemsHard.map(e => {
      return{
        
        title: e.title,
        unit_price: parseFloat(e.unit_price),
        quantity: parseInt(e.quantity)
      }
    
  } )

  itemsHard = itemsMp;

  
  
    try {
      let preference = {
        binary_mode: true, //el pago se acepta o rechaza, ninguna cosa mas
        statement_descriptor: "Buyme App Shop", //envia descripcion del negocio a la tarjeta
        items: itemsHard,
        shipments: {
          cost: 0,
          mode: "not_specified",
        }, // establece el costo de envio por defecto
        back_urls: {
          failure: "http://localhost:3000/mp",
          success: "http://localhost:3000/mp", //     ANDUVO TODO OK
                  //  TE DA LA OPCION DE VOLVER AL SITIO (ACA) CUANDO ALGO FALLA
        },
        notification_url: "https://aa21-186-108-78-3.ngrok.io/notification", //"https://mercadopago-checkout.herokuapp.com/webhook", NO SE QUE HACE
        auto_return: "approved",
      };
      // "https://localhost:3001/notification"
      mercadopago.preferences
        .create(preference)
        .then(function (response) {
          const valor = response.body.id;
          
          createInvoiceDB(clientId, itemsHard, valor)
            .then(function (response1) {})
            .catch(function (error) {
              console.log(error);
            });
          const url = response.body.init_point
          res.json({url: url}); //se usa el init point de producttion
        })
        .catch(function (error) {
          console.log(error);
        });
        // res.send('Mensajeeeeeee')
    } catch (e) {
      showErrors("/mp", e);
      return 404;
    }
 }

 
});

module.exports = router;



