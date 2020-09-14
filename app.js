
var request = require('request')

request("https://api.covid19api.com/", function(error, response, body){
    if(!error && response.statusCode ==200){
        console.log(body.allRoute)
    }
    else{
        console.log(error)
    }
})

