//calculo del consumo electrico


//funcion que trae artefactos de bd al modal  
$(".traer").on('click',function(){
    var aid = $(this).attr("id")//devuelve el id de la clase traer (artefacto id aid) 
    var tabla = document.querySelector('#contenidomodal')
    $.getJSON(" ../api/electricos",function(data){
            
        var categoria = limpiar(aid,data)//llama a función limpiar para retornar los datos de categoría seleccionada
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
    $.getJSON(" ../api/electricos",function(data){
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
                            
                            <td id="seleccion">
                            <select id="cantidad">
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
                                <button type="button" class="btn btn-outline-danger borrar">Eliminar</button>
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

        var filas=document.querySelectorAll("#tabla #contenido tr");
        var total=0;
        console.log("cantidad de filas: " + filas.length)
        // recorremos cada una de las filas
        // obtenemos las columnas de cada fila
        
        //filas.forEach(function(e) {
        for (let index = 0; index < filas.length; index++) {
            
            
           
            var columnas=$("#contenido tr:eq("+index+") td")
            console.log("columnas: " + columnas[index].textContent);
            
            // obtenemos los valores de la cantidad e importe
            //var cantidad=document.getElementById('cantidad');
            //var cantidad = $('#cantidad').val()
            //console.log("cantidad seleccionada: "+cantidad)
         
            //prueba para obtener las cantidades reales de cantidad e items seleccionados
            var cant = parseInt(columnas[4].innerText)
            console.log("valor de cantidad seleccionada: "+ cant)

            var consumo=parseInt(columnas[3].textContent);
            console.log("consumo:" + consumo);
            
            var horas = document.getElementById('horas');
            console.log("horas: " + horas.value);

            var dias = document.getElementById('dias');
            console.log("dias: " + dias.value);
            total += cant*consumo*horas.value*dias.value
            //total += cantidad.value*consumo*horas.value*dias.value;
            console.log("total: " + total);
                
        };//fin forEach
        var res = ((total*1.9)/1000) 
        var resultado = document.getElementById("precio")
        var resultado1 = document.getElementById("consumo")
        //var resultado2 = document.getElementById("cantPaneles")
        var resultado3 = document.getElementById("panel")
        // resultado.innerHTML = '';
        resultado.innerHTML = "precio de consumo electrico: $"+ res
        resultado1.innerHTML="el total de KW consumidos en el periodo  es: "+total
        //resultado2.innerHTML=  "con X paneles solares se puede reducir el precio de consumo"
        resultado3.innerHTML = `<img src="../static/img/iconoPanel.jpg" alt="">` 
        
        console.log(res)
        
    
})

//funcion para eliminar un artefacto seleccionado de la tabla

$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});




/*     */