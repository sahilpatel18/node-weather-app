const http = require('http')

const url = 'http://api.openweathermap.org/data/2.5/weather?id=4180439&appid=0364f0df8441a2c961ff9fdbac7c06e3'

// const server = http.createServer((request,response) => {
//  const request = require('request')

// request(url,(err,res,body) => {
//     console.log(body)
//     res.send('hi' )
//     res.end()
// })
    
// }).listen(8080)

var server = http.createServer(function(request,response){
    var request = require('request')


    request(url,function(err,res,body){
        var data = JSON.parse(body);
        console.log(body);
        
        response.write("<html><body><div id='container'>")
        response.write("<h1>"+ 'City Name = : ' + data['name'] + '<br>' + "</h1>")
        response.write("<h2>" + 'Temperature - : ' + data.main['temp'] + '<br>'+"</h2>")
        response.write("<h2>"+'Sunset Time - : ' + new Date (data.sys['sunset']* 1000) + "</h2>")
        response.write("</div></body></html>")
        response.end()
    })
  
}).listen(8080)

