//calculo del consumo de gas

          
    $(".traer").on('click',function(){
        var aid = $(this).attr("id")//devuelve el id de la clase traer (artefacto id aid) 
        var tabla = document.querySelector('#contenidomodal')
        $.getJSON(" ../api/artefactos/gas",function(data){
            
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
            $.getJSON(" ../api/artefactos/gas",function(data){
           
     
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
                            <select name="select" id="cantidad">
                                <option value=1>1</option>
                                <option value=2>2</option>
                                <option value=3>3</option>
                                <option value=4>4</option>
                                <option value=5>5</option>
                                <option value=6>6</option>
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

//funcion que retorna el resultado del consumo y precio en el gasto de gas
$('#calcular').on('click',function(){
    //sumar el total de consumo y multiplicar por el precio de m^3
        // obtenemos todas las filas del tbody

        var filas=document.querySelectorAll("#tabla tbody tr");
        var total=0;
        

        // recorremos cada una de las filas
    
        filas.forEach(function(e) {
    

            // obtenemos las columnas de cada fila
    
            var columnas=e.querySelectorAll("td");
            
           
            var cantidad=document.getElementById('cantidad');
            console.log(cantidad.value)
    
            var consumo=parseInt(columnas[3].textContent);
            console.log(consumo);
            var metrosCubicos = (consumo*0.27/2500)
            console.log(metrosCubicos);
            
            

            var horas = document.getElementById('horas');
            console.log(horas.value);
            

            var dias = document.getElementById('dias');
            console.log(dias.value);
            


            total+=cantidad.value*metrosCubicos*horas.value*dias.value;
            
        });
        console.log('total: '+total)
        //9.027509 cargo variable en tarifa R1 Camuzzi La Plata
        var res = (total*9.027509) 
        var cargoFijo= 193.77
        var precio = parseInt(res+cargoFijo)
        var resultado = document.getElementById("precio")
        // resultado.innerHTML = '';
        resultado.innerHTML = "el total consumido en pesos es: $"+ precio
        
        
        console.log(res)
        
    
})