$( document ).ready(function(){
    $(".traer").click(function(){
        var aid = $(this).attr("id")//devuelve el id de la clase traer (artefacto id aid)        
        $.getJSON(" ../api/artefactos/artefactos",function(data){
            //console.log(data)

            var categoria = limpiar(aid,data)

            
                        
            
                 
        })
    })
  

})

//funcion que retorna los datos de la categoría seleccionada

function limpiar(idd,datos){ 

    // console.log(id,datos)
    var arr = []
     
    datos.forEach(element => {
         

        if ( idd ==element.categoria ) {
            arr.push(element)

           
       }
        
    });
    return arr
}
