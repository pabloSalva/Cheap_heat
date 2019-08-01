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
    var seleccionada = document.getElementById('entidad').value
    //var text = seleccionada.options[seleccionada.selectedIndex].innerText
    $.getJSON("../api/tarifa/"+seleccionada, function (data) {
        console.log(data);
        
        
    })

})


