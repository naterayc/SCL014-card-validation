 const validator = {
  
  isValid(cardNumberA){
      let resultCardNumber=0;
  //duplicar posiciones pares
      for (let i=0; i<cardNumberA.length; i+=2){
          cardNumberA[i]=(cardNumberA[i]*2);
      }
  //verificar que el producto no sea mayor a 9, si es mayor sumar
      for (let i=0; i<cardNumberA.length; i++) {
          if (cardNumberA[i]>9){
          let numero=(parseInt(cardNumberA[i]/10))+(cardNumberA[i]%10);
          cardNumberA[i]=numero;
          console.log(numero);
      }
    }
  //sumando todos los nros de la tarjeta
      for (let i=0; i<cardNumberA.length; i++){
          resultCardNumber+=cardNumberA[i];
          console.log(resultCardNumber);
      }
      if (resultCardNumber%10===0){
        //console.log('valido');
          return true;
      }
      else{
        //console.log('invalido');
          return false;
      }
  },

   maskify(creditcardNumber) {

    //ocultando los primeros digitos de la tarjeta, exceptuando los utimos 4 "maskify"
    let cardNumberMask=creditcardNumber.slice(0,-4).replace(/./g,'#')+creditcardNumber.slice(-4);
    return cardNumberMask;
   }
  }
  export default validator;