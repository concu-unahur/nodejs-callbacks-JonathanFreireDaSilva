const miMap=(array,func,next) => {
    var nuevoArray = [];
    array.forEach(element => {
      nuevoArray.push  (  func(element) )
    });
    // Completar: acá se llena el array nuevo
    next(nuevoArray)
    
  }
  

  

function porDos(nro) {
    return nro*2
}

// Probando miMap
arrayViejo = [1,2,3,4,5]

 miMap(arrayViejo,porDos,resultado =>{
  console.log(resultado) // arrayNuevo = [2,4,6,8,10] 

 })
