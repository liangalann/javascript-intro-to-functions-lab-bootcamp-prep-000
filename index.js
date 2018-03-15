var uppercase = "HELLO!"
var lowercase = 'hello!'

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  uppercase = string.toUpperCase()
  console.log(uppercase);
}

function logWhisper(string) {
  lowercase = string.toLowerCase()
  console.log(lowercase);
}
