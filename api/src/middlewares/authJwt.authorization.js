const {verifyToken, valiteAdmin, valiteSuperv} = require('../token/auth.token');


async function verifyUser(req, res, next){
    
    const token = req.headers['authorization'];
    
    if(!token){
        return res.status(403).json({message: 'No token provided'});
    }
    
    const verify = await verifyToken(token);
    
    if(!verify){
        return res.status(401).json({message: 'Unauthenticated user'});
    }

    next()
};


async function roleAdmin(req, res, next){
   
    
    const verify = await valiteAdmin();
    
    if(!verify){
        return res.status(401).json({message: 'Unauthorized role'});
    }

    next()
    
};

async function roleSuperv(req, res, next){

    
    
    const verify = await valiteSuperv(); 

    if(!verify){
        return res.status(401).json({message: 'Unauthorized role'});
    }

    next()
    
}


module.exports = { 
    verifyUser,
    roleAdmin,
    roleSuperv
};