const validator = {
  
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