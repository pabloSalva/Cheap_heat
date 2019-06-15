
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
                            <select id="cantidad">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            </select></td>
                            <td><select id="horas">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select></td>
                            <td>
                            <select id="dias">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                               

                            </select>
                            </td>
                   
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
            var cantidad=document.getElementById('cantidad');
            console.log(cantidad.value)
    
            
    
            var consumo=parseInt(columnas[3].textContent);
            console.log(consumo);
            

            var horas = document.getElementById('horas');
            console.log(horas.value);

            var dias = document.getElementById('dias');
            console.log(dias.value);


            total += cantidad.value*consumo*horas.value*dias.value;
            console.log(total);
            
    
        });
        var res = ((total*1.9)/1000) 
        var resultado = document.getElementById("precio")
        // resultado.innerHTML = '';
        resultado.innerHTML = "precio de consumo electrico: $"+ res
        console.log(res)
        
    
})