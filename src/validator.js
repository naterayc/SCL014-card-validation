const  validator  =  {
  
    isValid ( cardNumberA ) {
        let  resultCardNumber = 0 ;
    // duplicar posiciones pares
        for  ( let  i = 0 ;  i < cardNumberA . length ;  i + = 2 ) {
            cardNumberA [ i ] = ( cardNumberA [ i ] * 2 ) ;
        }
    // verificar que el producto no sea mayor a 9, si es mayor sumar
        for  ( let  i = 0 ;  i < cardNumberA . length ;  i ++ )  {
            if  ( cardNumberA [ i ] > 9 ) {
            let  numero = ( parseInt ( cardNumberA [ i ] / 10 ) ) + ( cardNumberA [ i ] % 10 ) ;
            cardNumberA [ i ] = numero ;
            consola . log ( numero ) ;
        }
      }
    // sumando todos los nros de la tarjeta
        for  ( let  i = 0 ;  i < cardNumberA . length ;  i ++ ) {
            resultCardNumber + = cardNumberA [ i ] ;
            consola . log ( resultCardNumber ) ;
        }
        if  ( resultCardNumber % 10 === 0 ) {
          //console.log('valido ');
            volver  verdadero ;
        }
        más {
          //console.log('invalido ');
            devuelve  falso ;
        }
    } ,
  
     maskify (número de tarjeta de crédito )  {
  
      // ocultando los primeros digitos de la tarjeta, excepto los utimos 4 "maskify"
      let  cardNumberMask = número de tarjeta de crédito . rebanada ( 0 , - 4 ) . reemplace ( /./g , '#' ) + número de tarjeta de crédito . rebanada ( - 4 ) ;
      return  cardNumberMask ;
     }
    }
     validador predeterminado de  exportación ;
 