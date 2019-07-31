$('#entidad').on('click',function () {
    $.getJSON("../api/entidad",function(data) {

       console.log(data[0].nombre);
       var entidad = document.getElementById('entidad')
       entidad.innerHTML = '' 
       data.forEach(element => {
       //for (var i =0; i<data.length;i++){ 
            //console.log(data.length );
        
            
            
                
            entidad.innerHTML += `
            <option value="${element.nombre}">${element.nombre}</option>
        
            `
       // }   
       });
           
          
      
        
    })
    
})