// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  var matriz1 = [];
  var claves = Object.keys(objeto);
  var valores = Object.values(objeto); 
  for(i = 0; i < claves.length; i++){
    for(j = 0; j < 1; j++){
     matriz1[j] = claves[i];
     j++;
     matriz1[j] = valores[i];
    }
    matriz[i] = matriz1;
    matriz1 = [];
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  var letra = "";
  for(i = 0; i < string.length; i++){
    letra = string[i];
    if(objeto.hasOwnProperty(letra)){
      objeto[letra] = objeto[letra] + 1;
    }else{
      objeto[letra] = 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = "";
  var minus = "";
  for(i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      mayus = mayus + s[i];
    }else{
      minus = minus + s[i];
    }
  }
  return mayus+minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase = "";
  var palabra = "";
  var palabra_actual = "";
  var palabra_reves = "";
  palabra = str.split(" ");
  for(i = 0; i < palabra.length; i++){
    palabra_actual = palabra[i];
    for(j = palabra_actual.length - 1; j >= 0; j--){
      palabra_reves = palabra_reves + palabra_actual[j];
    }
    if(i === palabra.length-1){
      frase = frase + palabra_reves;
    }else{
      frase = frase + palabra_reves + " ";
    }
    palabra_reves = "";
  }
  return frase; 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var validar = numero.toString();
  var reves = "";
  
  for(i = validar.length - 1; i >= 0; i--){
    reves = reves + validar[i];
  }
  if(reves === validar){
    return "Es capicua"
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var largo = cadena.length
  for(i = 0; i < largo; i++){
   cadena = cadena.replace("a","");
   cadena = cadena.replace("b","");
   cadena = cadena.replace("c","");
 }
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux = "";
  console.log(arr);
  for(i = 0; i < arr.length - 1 ; i++){
    for(j = i+1; j < arr.length; j++){
      if(arr[i].length > arr[j].length){
        aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
        aux = "";
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interseccion = [];
  for(i = 0; i < arreglo1.length; i++){
    for(j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        interseccion.push(arreglo1[i]);
      }
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

