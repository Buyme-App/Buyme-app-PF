const showErrors = require('../../messageConsole');
const { Order, Client, Invoice} = require('../../database/db');
const nodemailer = require('nodemailer');
const { ETHEREAL_USER, ETHEREAL_PASSWORD, ETHEREAL_HOST } = process.env;   //PARA ETHEREAL


async function transport(clientId, invoiceId, adress, transportedBy, trackingNumber, name, email ) {
    try{
        const result= await Order.create(
            {
            adress: adress,
            transportedBy: transportedBy,
            trackingNumber: trackingNumber,
            delivered: true,                     //entregado al transporte
            clientId: clientId,
            invoiceId: invoiceId,
            });
            
        if (result===null) return 404;
        else {

            // const transporter = nodemailer.createTransport({
            //     service: "gmail",
            //     host: "smtp.gmail.com",
            //     port: 465,
            //     auth: {
            //         user: "developerbuymeapp@gmail.com",
            //         pass: "fYdxeE3nqK577CT",
            //     },
            //     tls: {
            //         rejectUnauthorized: false
            //     }
            // });

            const transporter = nodemailer.createTransport({
                host: ETHEREAL_HOST,
                // host: "smtp.ethereal.email",
                port: 587,
                auth: {
                user: ETHEREAL_USER,
                pass: ETHEREAL_PASSWORD,
                // user: "kqweeps45irdcwrp@ethereal.email",
                // pass: "p1fMjX2QHnJYfBSv5N",

                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            let mailOptions = {
                    from: "Buy Me App",
                    to: email,                                   //`${email}`,
                    subject: "Su Producto ha sido despachado!",
                    text: `Estimada/o ${name}. El/los producto/s pertenecientes a la factura ${invoiceId} ha/han sido despachado/s hoy por transporte ${transportedBy} con Numero de guia ${trackingNumber}. Muchas gracias por su Compra!.`
            };

            await transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    showErrors("post/sendMail", error);
                    return 500;
                } else {
                    console.log("mandando mail");
                    return 200;
                }
            });
        }
    }catch(e) {
        showErrors('transport', e);
        return 404;
    }
}
module.exports = transport;