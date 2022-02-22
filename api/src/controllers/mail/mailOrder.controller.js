const showErrors = require('../../messageConsole');
const nodemailer = require('nodemailer');

async function mailOrder(destino, transporte, guia) {
    try{
        console.log(destino, transporte, guia);

        var transporter = nodemailer.createTransport({
            host:"smtp.ethereal.email",
            port: 587,  
            secure: true,
            auth: {
                user: 'josiane.zboncak19@ethereal.email',            //emisor o  remitente
                pass: 'xdKKWU8YKmgYUs4hpx',
            }
        });

            console.log(transporter); 

            
        let message = {
            from: "Remitente",
            to: "josernestogarcia609@gmail.com",    //destino,            //aca va el destino que entra por body
            subject: "Su producto fue despachado!",
            text: `Estimado Cliente, su producto ha sido despachado el dia de hoy por medio de transporte ${transporte} con Numero de Guia No. ${guia}. Muchas Gracias por su Compra!`
        }

        transporter.sendMail(message, (error, info) => {
            if(error) {
                
                return 500;
            }else {
                return 200;
            }
        })
    } catch(e) {
        showErrors('mailOrder', e);
        return 404;
    }
};

module.exports = mailOrder;