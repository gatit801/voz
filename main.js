y = 0;
x = 0;

draw_circle = "";
draw_rect = ""

var SpeechRecongnition = window.webkitSpeechRecognition
var recongnition = new SpeechRecongnition()

function start(){
    document.getElementById("status").innerHTML = 'El sistema esta ecuchando. Por favor habla'
    recongnition.start()
    
}

recongnition.onresult = function(event) {
//    console.log(event)


var contenido = event.results[0][0].transcript

console.log(contenido)

    document.getElementById("status").innerHTML = 'la voz es:'

if(contenido == "círculo"){
    x = Math.floor(Math.random() * 900)
    y = Math.floor(Math.random() * 600)

    document.getElementById("status").innerHTML = 'un criculo de dibuja'

    draw_circle =  "set"
console.log(draw_circle)

}

if(contenido == "rectángulo"){
    x = Math.floor(Math.random() * 900)
    y = Math.floor(Math.random() * 600)
    document.getElementById("status").innerHTML = 'un rectangulo de dibuja'
    draw_rectangle =  "set"

console.log(draw_rect)

}
}



function setup(){
    canvas = createCanvas(900,600)
}

function draw(){

if(draw_circle = "set"){

    circle(x, y, 28)
    draw_circle = ""
}

if(draw_rect = "set"){
    rect(x, y, 70, 50)
    draw_rect = ""


}


}



