const showErrors = require("../../messageConsole");
const {Client} = require('../../database/db');
const createCustomerDB = require("../../controllers/customer/createCustomer.controller");



async function loginCostumer(req){

    // console.log('>>>>>CREATEGGGGGGGG', req.body)
    if(req.body.googleId){

        try {
                const client = await Client.findOne({
                where: {email: req.body.email}
                
                });
        
                // console.log('COSTUMERGOOO', client)
                if(client){
                    // console.log('LOGINGOOOO')
                    return client;
        
                }else{
        
                    const {firstName, lastName, email, googleId} = req.body;
        
                    const result = await createCustomerDB(firstName, lastName, email, googleId);

                    if(result === 201){

                        
                        const client = await Client.findOne({
                            where: {email: req.body.email}
                            
                        });
                        // console.log('$$$$$$$$', client)
                        return client
                    }
                    else return false;
        
                }
        
        } catch (error) {
            showErrors("createCustomerDB", error);
            return false;
        }
    
    }else{

        try {
            const client = await Client.findOne({
                where: {email: req.body.email}
                
                });
        
                // console.log('CostumerINt', client)
                if(client){
                    // console.log('LOGININTER')
                    return client
        
                }else{
                    return false
                }
        } catch (error) {
            showErrors("createCustomerDB", error);
            return false;
        }
    }
};


module.exports = loginCostumer;