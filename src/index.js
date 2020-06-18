import validator from './validator.js';

let creditcardNumber='';

// funcionalidad del boton "Comenzar" oculta seccion principal, muestra seccion input
document.getElementById('go').addEventListener('click', () =>{
  //oculta la seccion princial
    document.getElementById('principal').style.display="none";
  //muestra la seccion para ingresa datos de tarjeta
    document.getElementById('inputCreditCard').style.display="block";
  });
  
//funcionalidad del boton "validar", captura valores del input
document.getElementById('validation').addEventListener('click', () =>{
    //condiciona que los inputs no pueden estar vacios 
      if (document.getElementById('userName').value !=='' && document.getElementById('creditCard').value !=='' ){
      //captura nombre del usuario
       const name= document.getElementById('userName').value;
      //captura numero de tarjeta   
       creditcardNumber=document.getElementById('creditCard').value;
      //oculta pantalla de ingreso de datos
        document.getElementById('inputCreditCard').style.display="none";
      //muestra pantalla de resultados de la tarjeta
        document.getElementById('valid').style.display="block";
      //convertir el nro de tarjeta en un array
      let cardNumberA=[];
      for (let i=0; i<creditcardNumber.length; i++){
        cardNumberA.push(parseInt(creditcardNumber[i]));
      }
      //luego de validar
      let valid=validator.isValid(cardNumberA);
        if (valid===true){
        //llamando a maskify
        let newCreditCardNumber=validator.maskify(creditcardNumber);
          //mostrando resultados en pantalla valid
          document.getElementById('messageValid').innerHTML='Que bien, ' + name.toUpperCase();
          document.getElementById('imageCheck').innerHTML='<img src="img/check.png" alt="check" class="imgcheck">'
          document.getElementById('message').innerHTML='Aqui te mostramos los beneficios a los que puedes acceder con tu tarjeta'
          document.getElementById('cardNumberAfter').innerHTML= 'Numero '+ newCreditCardNumber;
          document.getElementById('benefits').innerHTML='<div class="hyperlink"><a href="https://www.levi.cl/" class="text" target="blank"> 30% off zapatillas en Levis</a></div><br>'+
'<div class="hyperlink"><a href="https://www.lider.cl/" class="text" target="blank">Despacho gratis en Lider.cl solo RM</a></div><br>'+
'<div class="hyperlink"><a href="https://www.falabella.com/falabella-cl/" class="text" target="blank">35%off moda mujer en Falabella.cl</a></div><br>'
        }
        else {
          document.getElementById('messageValid').innerHTML='Lo sentimos, ' + name.toUpperCase();
          document.getElementById('message').innerHTML='En estos momentos no encontramos beneficios para tu tarjeta';
          document.getElementById('cardNumberAfter').innerHTML='Numero '+ newCreditCardNumber;
        } 
      }
      // mostrar mensajes si el input esta vacio al hacer click
      else{
        document.getElementById('empty1').innerHTML='El campo no puede estar vacio';
        document.getElementById('empty2').innerHTML='El campo no puede estar vacio';
      }
  });

//funcionalidad del boton Volver (regresa a la pantalla principal)
document.getElementById('return').addEventListener('click', () =>{
  document.getElementById('principal').style.display="block";
  document.getElementById('valid').style.display="none";
  document.getElementById('userName').value='';
  document.getElementById('creditCard').value='';
  cardNumberA='';
  creditcardNumber='';

});