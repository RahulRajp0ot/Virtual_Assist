let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
// wishMe();

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(text_speak) //this finction speaks; 
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Rahul Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Rahul")
    }else{
        speak("Good Evening Rahul")
    }
}
window.addEventListener('load',()=>{
    wishMe()
});

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript;
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Rahul")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}



// function sp(text){
//     let text_speak = new SpeechSynthesisUtterance(text);
//     text_speak.rate = 1;
//     text_speak.pitch = 1;
//     text_speak.volume = 1;
//     text_speak.lang = "en-GB";  // Use "hi-IN" as it is more commonly available for Hindi
    
//     window.speechSynthesis.cancel(); // Cancel any ongoing speech to avoid conflicts
//     window.speechSynthesis.speak(text_speak);
// }
// window.speechSynthesis.getVoices().forEach(voice => console.log(voice.name + " (" + voice.lang + ")"));


