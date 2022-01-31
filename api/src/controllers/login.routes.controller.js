
//Funcion que trabaja sobre ruta /login mira si no hay email mira si hay usuario y si hay ve que el password coincida
//Por ahora si ingresa un email devuelve el mismo email

export default async function loginRoutesController (req,res ) {
    try {
       const { userName, userPassword, userEmail} = req.body; 
       if (!userEmail) {
         const result = await Admin.findOne({where: {userName: userName}});
         if (result === null)  
            return res.send("User Doesn't Exist");
         else {
            if (result.userPassword === userPassword)  
                 return res.send("User's Access Granted");
            else return res.send('User Rejected');   
        }         
        } else return res.send(userEmail);
    } catch(e) { return res.send(e) } 
}
