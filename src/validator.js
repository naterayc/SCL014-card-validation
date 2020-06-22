<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const validator = {
=======
const  validator  =  {
>>>>>>> 88f8aa9... Making InitialPomChanges match develop
=======
const validator = {
>>>>>>> 9708f49... hola
  
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9708f49... hola
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

<<<<<<< HEAD
=======
 const validator = {
=======
const validator = {
>>>>>>> cf1f09fd9676be566a4a40c56403c6b413eb5429
  
    isValid(cardNumberA){
    //variables a utilizar
        let resultCardNumber=0;
        let double=[];
        let odd=[];
        let doubleReduced=[];
        let numero=0;

    //duplicar posiciones pares
        for (let i=0; i<cardNumberA.length; i++){
            if (i%2===0){
              double.push(cardNumberA[i]*2);
          }
          else {
              odd.push(cardNumberA[i]);
          }
          }

    //verificar que el producto de double no sea mayor a 9, si es mayor sumar ambos digitos
        for (let i=0; i<double.length; i++) {
            if (double[i]>9){
            numero=parseInt(double[i]/10)+parseInt(double[i]%10);
            doubleReduced.push(numero);
        }
        else {
            doubleReduced.push(double[i]);
        }
        }

    //reducir los digitos de la tarjeta capturados en arrays para despues sumarlos

       let sumOdd=odd.reduce((a,b)=> a + b, 0);
       let sumEven=doubleReduced.reduce((a,b)=> a + b, 0);

<<<<<<< HEAD
>>>>>>> a25060d3c8f58c1d2d4ae6fe43f63658c4582327
=======
>>>>>>> 9708f49... hola
   maskify(creditcardNumber) {

    //ocultando los primeros digitos de la tarjeta, exceptuando los utimos 4 "maskify"
    let cardNumberMask=creditcardNumber.slice(0,-4).replace(/./g,'#')+creditcardNumber.slice(-4);
    return cardNumberMask;
   }
  }
<<<<<<< HEAD
  export default validator;
=======
     validador predeterminado de  exportación ;
 
>>>>>>> 88f8aa9... Making InitialPomChanges match develop
=======
  export default validator;
>>>>>>> 9708f49... hola
=======
    //sumando todos los nros de la tarjeta
       resultCardNumber=parseInt(sumOdd+sumEven);

        if (resultCardNumber%10===0){
            return true;
        }
        else{
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
>>>>>>> cf1f09fd9676be566a4a40c56403c6b413eb5429
