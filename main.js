var SpeechRecognition = window.webkitspeechrecognition;

var recognition = new SpeechRecognition();

function start()
{
   document.getElementById("textbox").innerHTML = "";

   recognition.start();

}

recognition.onresult = function(event){

    console.log (event);

var Content = event.results[0][0].transcript;
console.log(contect);

document.getElementById("textbox").innerHTML = Content
}