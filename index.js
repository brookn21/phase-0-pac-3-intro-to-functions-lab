function shout(string){
    return string.toUpperCase()
}

// console.log(shout('hello'))

function whisper(string){
    return string.toLowerCase()
}

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return("I can't hear you!")
    }
    else if(string === string.toUpperCase()){
        return("YES INDEED!")
    }
    return(string === "Let's have dinner together!" ? "I would love to!": null)
}
