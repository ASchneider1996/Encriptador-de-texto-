// Obteniendo el valor de los atributos a utilizar mediante el id
let text = document.getElementById("textarea");
let encryptBtn = document.getElementById("btn-encriptar");
let decryptBtn = document.getElementById("btn-desencriptar"); 
let copyBtn = document.getElementById("btn-copiar"); 
let finalText = document.getElementById("texto-final"); 

// Reemplazo de vocales por texto de encriptación
function textEnc (txt){
  if (txt=="a"){
  txt = "ai";
  return txt;
  } else if (txt=="e"){
  txt = "enter";
  return txt;
  } else if (txt=="i"){
  txt = "imes";
  return txt;
  } else if (txt=="o") {
  txt = "ober";
  return txt;
  } else if (txt=="u") {
  txt = "ufat"; 
  return txt;
 }
} 

// FUNCION PARA ENCRIPTAR MENSAJE 
function enc(txt) {
  // Reemplazo de letras indicadas en el mensaje original
  let encryptedText = txt.replace(/a|e|i|o|u/g, textEnc); 
  let hide = document.getElementById("ocultar"); 
  let finalText = document.getElementById("texto-final"); 
  let copyText = document.getElementById("btn-copiar");
  encryptBtn; 
  // Cambio de display en el aside para visualización del mensaje ya encriptado
  hide.style.display = "none"; 
  finalText.style.display = "flex"; 
  copyText.style.display = "block";
  return encryptedText; 
}   
    
// Agrega un evento click al botón Encriptar
encryptBtn.addEventListener("click", function(event){
  event.preventDefault();
  let txt = text.value;
  let message = enc(txt);
// Quita los espacios entre palabras
  finalText.value = message.split(" ").join("");
  console.log(message); 
});
 

// Reemplazo de texto de encriptación por vocales originales
function textDec (txt){
  if (txt=="ai"){
  txt = "a";
  return txt;
  } else if (txt=="enter"){
  txt = "e";
  return txt;
  } else if (txt=="imes"){
  txt = "i";
  return txt;
  } else if (txt=="ober") {
  txt = "o";
  return txt;
  } else if (txt=="ufat") {
  txt = "u"; 
  return txt;
 }
} 

// FUNCION PARA DESENCRIPTAR MENSAJE
function dec(txt) { 
  // Toma el mensaje original y reemplaza las letras indicadas
  let originalText = txt.replace(/ai|enter|imes|ober|ufat/g, textDec); 
  return originalText; 
}

// Agrega un evento click al botón Desencriptar
decryptBtn.addEventListener("click", function(event) {
  event.preventDefault();
  let txt = text.value; 
  var message = dec(txt); 
// Devuelve los espacios entre palabras
  finalText.value = message.split("").join("");
  console.log(message);  
}); 


// FUNCION PARA COPIAR MENSAJE
// Agrega un evento click al botón Copiar
copyBtn.addEventListener("click", function(event) {
  event.preventDefault(); 
  finalText.select();
  navigator.clipboard.writeText(finalText.value); 
});