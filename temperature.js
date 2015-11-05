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
var m;
  this.inicializa=function(original){
		var temp = original;
	  //var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
	  var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[e]\d+)?)\s*([fFcC])/;
	  m = temp.match(regexp);
	}



  this.calc=function(){

    if (m) {

      var num = m[1];
      var type = m[2];
      var resultado;



      ///
          if (type == 'c' || type == 'C') {
              resultado=this.c2f(num);
          }
          else{
            resultado=this.f2c(num);

          }

        }
        else {
            resultado = "ERROR! Try something like '-4.2C' instead";
        }
        return resultado
      }


    Medida.call(this, num, cad);

    var result;

   ///
   this.c2f=function(number){
      result = (number * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
      return result
    }

    this.f2c=function(number){
      result = (number - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
      return result
    }

   ///

}



function calculate() {
var m;

	this.inicializa=function(original){
		var temp = original;
	  //var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
	  var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[e]\d+)?)\s*([fFcC])/;
	  m = temp.match(regexp);
	}

	this.calc=function(){

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

  }
  else {
    resultado = "ERROR! Try something like '-4.2C' instead";
  }
	return resultado;
}

}

module.exports = Temperatura;
