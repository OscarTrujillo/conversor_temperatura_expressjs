"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function Medida(num,cad) {
  
   var numero=num;
   var cadena=cad;
    
  this.getn =function(){
    return numero
  }
  this.getc =function(){
    return cadena
  }
}

function Temperatura (num, cad) {
    Medida.call(this, num, cad);

    var result;
    var number = parseFloat(this.getn());
    
   ///
   this.c2f=function(){
      result = (number * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
      return result
    }
   
    this.f2c=function(){
      result = (number - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
      return result
    }
    
   ///

}



function calculate() {

  var temp = original.value;
  //var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[e]\d+)?)\s*([fFcC])/;
  
  var m = temp.match(regexp);
  
  if (m) {
    
    var num = m[1]; 
    var type = m[2];
    var resultado;
      
      Temperatura.prototype = new Medida;
            
      var a = new Temperatura(num,type);

      
      ///
          if (type == 'c' || type == 'C') {
              resultado=a.c2f();
          }
          else{
            resultado=a.f2c();
              
          }
   converted.innerHTML = resultado;

  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }

}