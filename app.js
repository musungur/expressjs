
const { request, response } = require("express")
const express = require("express")

const app = express()


function server(){
	const port = 3000
	const host = "127.0.0.1"

	console.log("Server listening on port "+port+".")
	console.log("Host IP: "+host+".")

}

function payload(){
	var nm = "Robert Musungu Abisai"
	var msg = "this is My First js App Test ", name ="My Name is "+nm+"."
	console.log("This is payload function")


	console.log(msg, name)
}

function hellW(){
	return "Hellow World!!"
}

console.log(server(),payload())

app.get("/", (request, response)=>{
	response.send(hellow())
})
