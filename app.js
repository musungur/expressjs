
//const { request, response } = require("express")
const express = require("express")

const app = express()

const port = 3000

const host = "127.0.0.1"
function server(){
	const port = 3000
	const host = "127.0.0.1"

	console.log("Server listening on port "+port+".")
	console.log("Host socket: "+host+":"+port)

}
/*
function pload(){
	var nm = "Robert Musungu Abisai"
	var msg = "this is My First js App Test ", name ="My Name is "+nm+"."
	console.log("This is payload function")


	console.log(msg, name)
}
*/

function mess(){
	console.log("listening at socket: http://"+host+":"+port+"..")
//	return mess()
}
/*
const payloads = {
	var fname = "Robert"
	var sname = "Musungu"
	var email = fname+"."+sname+"@gmail.com"

}
*/
//const data = mess(payloads)
/*
function hellW(){
	return "Hellow World!!"
}

console.log(server(),payload())
*/
app.get("/", (request, response) => {
	response.send("Hellow World, This is Robert "+mess())
	console.log(request)
//	return "hellow World, This is Robert"

	//	response.send(payload())
})

app.listen(port, () =>{
	console.log(mess())
	
})
