const showErrors = require("../../messageConsole");
const { Cart, Client} = require('../../database/db');

async function logCartDB(items, clientId) {
    try{
        let cart1 = await Cart.findOne( {
            where: { clientId: clientId },
            include: {model: Client}
        });
         if (cart1===null) {           
                 const client = await  Client.findByPk(clientId);
                 if (client===null) return 400;
                 else {                                       
                        const cart2= await Cart.create({
                            items,
                            clientId    
                        });
                        if (cart2!==null) return cart2;
                        else return 400
                    }  
        }
        let cartArray=[];
        if (cart1===null) return items; 
        else {
            let cart = JSON.stringify(cart1);
            cart = JSON.parse(cart);
            for(let i=0; i<items.length; i++) { 
                for (let j=0; j<cart.items.length; j++) {   
                    if (cart.items[j].id!==0 && (cart.items[j].id===items[i].id)) {
                                                cartArray.push({
                                                                id: cart.items[j].id,
                                                                quantity: cart.items[j].quantity+items[i].quantity
                                                            });
                                                items[i].id= 0;
                                                cart.items[j].id=0;
                    };              
                }
            }
            for(let i=0; i<items.length; i++) 
                if (items[i].id!==0) cartArray.push(items[i]);
            for(let j=0; j<cart.items.length; j++) 
                if (cart.items[j].id!==0) cartArray.push(cart.items[j]);    
            }
            cart1.items=cartArray;
            cart1.save()
            .then((success)=> {
                return 200;
            })
            .catch((error)=> {
                return 404
            });
            return cartArray;
        }    
    catch(e) {
        showErrors('logCartDB', e);
        return 404;
    }
};

module.exports = logCartDB;

//