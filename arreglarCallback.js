const suma = (numero_uno,numero_dos,next)=>{
    setTimeout(function(){
       var resultado = numero_uno + numero_dos;
       next(resultado)
    }, 1000);
}
 
//  var resultado = suma(2,5)//
 
//   console.log(resultado);
 
 
 
const sumaBien =(x,y,suma,next)=>{
    suma(x,y,res=>{
        next(res)
    })
    // completar...
}
  

 
sumaBien(2,5,suma, resultado=>{
    console.log(resultado);
})
 

