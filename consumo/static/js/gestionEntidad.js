$('#entidad').on('click',function () {
    $.getJSON("../api/entidad",function(data) {

       console.log(data[0].nombre);
       var entidad = document.getElementById('entidad')
        data.forEach(element => {
            entidad.innerHTML = ''
            entidad.innerHTML += `
            <option value="${element.nombre}">${element.nombre}<option>
            `
           
       });
           
          
      
        
    })
    
})