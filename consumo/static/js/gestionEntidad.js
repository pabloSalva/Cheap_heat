//función que trae las entidades electricas al select

$('#cargarEntidad').on('click',function () {
    $.getJSON("../api/entidad",function(data) {

       console.log(data[0].nombre);
       var entidad = document.getElementById('entidad')
       entidad.innerHTML = '' 
       data.forEach(element => {
           console.log(element);
           
            entidad.innerHTML += `
            <option value="${element.nombre}">${element.nombre}</option> `
       });
           
          
      
        
    })
    
})


//creación de tarifas electricas de la entidad seleccionada

$('#entidad').on('click',function () {
    //var seleccionada = document.getElementById('entidad').value
    var tarifa = document.getElementById('tarifas')
    $.getJSON("../api/tarifas/1", function (data) {
        console.log(data);
        tarifa.innerHTML = ''
        
        tarifa.innerHTML += `
            <option id="opcion" value="${data.codigo}">${data.codigo}</option> 
            `
      
        var list = document.getElementById("cuerpoTablaTarifa")
        list.innerHTML = ''
        list.innerHTML += `
            <td>${data.cargofijo} pesos</td>
            <td>${data.precioKwh} pesos</td>
            `
        
    })
    

})


