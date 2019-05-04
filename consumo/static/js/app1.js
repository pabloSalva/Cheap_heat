
//funcion js que levanta el modal multiple boton

// $('#exampleModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever') 
    
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ' + recipient)
//     modal.find('.modal-body input').val(recipient)
    
//   })
 



//funcion que trae artefactos de bd al modal
//   $( document ).ready(function(){
    
      
    $(".traer").on('click',function(){
        var aid = $(this).attr("id")//devuelve el id de la clase traer (artefacto id aid) 
        var tabla = document.querySelector('#contenidomodal')
        $.getJSON(" ../api/artefactos/artefactos",function(data){
            
            var categoria = limpiar(aid,data)
            console.log(categoria)
            
            
            tabla.innerHTML = ''
            //recorro el listado de elementos seleccionados en la funcion limpiar 
            //los inserto en una tabla
            categoria.forEach(elemento => {
                tabla.innerHTML += `
                <tr> 
                <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-text">
                
                   
                    <td><input type="checkbox" name="artefactos" value=${elemento.id}></td>
                    
                    <td>${elemento.nombre_artefacto}</td>
                    <td>${elemento.marca}</td>
                    <td>${elemento.modelo}</td>
                    <td>${elemento.consumo}</td>
                    
                </div>
            </div>
                
            </div>
            </tr>
                 `
            });//fin forEach


        })
        
    })
            //funcion de agregar artefactos seleccionados por el usuario
           $('#Agregar').on({click:function(){
            $.getJSON(" ../api/artefactos/artefactos",function(data){
           
     
                var checked = [];//arreglo que gusrdará los artefactos seleccionados por el ususario
                
                //Recorro todos los input checkbox con name = artefactos y que se encuentren "checked"
                $("input[name='artefactos']:checked").each(function (){
                    //Mediante la función push agrego al arreglo los values de los checkbox
                    checked.push(($(this).attr("value")));
                });
                     
                // $('input:checkbox[name=artefactos]').attr('checked',false);
            
                console.log(checked);
            
                var contenido = document.getElementById('contenido');
                checked.forEach(element => {
                    
                    data.forEach(select => {
                        if (element == select.id) {
                            contenido.innerHTML += `
                            <tr>
                            <td>${select.nombre_artefacto}</td>
                            <td>${select.marca}</td>
                            <td>${select.modelo}</td>
                            <td>${select.consumo}</td>
                            <td>
                            <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            </select></td>
                            <td><select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select></td>
                            <td></td>
                   
                            <td>
                                <button type="button" class="btn btn-outline-danger eliminar"  id=${select.id} >Eliminar</button>
                            </td>
                             </tr>
                                    `
            
                            
                        }
            
                    
                    });
                    
                });
                
            
        })
    }
            
            
                })//fin funcion agregado
                

                 

    
// })


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

//funcion que retorna el resultado del consumo y precio en el gasto electrico
$('#calcular').on('click',function(){
    //sumar el total de consumo y multiplicar por el precio de kwh
        // obtenemos todas las filas del tbody

        var filas=document.querySelectorAll("#tabla tbody tr");
        var total=0;

        // recorremos cada una de las filas
    
        filas.forEach(function(e) {
    

            // obtenemos las columnas de cada fila
    
            var columnas=e.querySelectorAll("td");
         
            // obtenemos los valores de la cantidad y importe
    
            var cantidad=parseInt(columnas[4].textContent);
    
            var consumo=parseInt(columnas[3].textContent);

            var horas = parseInt(columnas[5].textContent);
    
     
    
            
    
            
    
     
    
            total+=cantidad*consumo*horas;
    
        });
        alert(total*1.4)
    
     
    
        // mostramos la suma total
    
        // var filas=document.querySelectorAll("#tabla tfoot tr td");
    
        // filas[1].textContent=total.toFixed(2);
    
})