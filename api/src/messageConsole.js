const colors = require('colors');


function showErrors(param,err){

    console.log(colors.red(`<<<Error in [${param}] ${err}>>>`))

};


module.exports = showErrors




