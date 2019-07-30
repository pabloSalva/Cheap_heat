//crea un elemento dinamicamente



var cantidadArtefactos = [1,2,3,4,5,6]
var cantHoras = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
var cantDias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


var colum = document.createElement("td")
colum.setAttribute("id","seleccion")


var bloque = document.getElementById('seleccion');

colum.appendChild(bloque)
var elemento = document.createElement("select")

elemento.setAttribute("id", "cantidad" );
//elemento.id = 'select'+incremento;
bloque.appendChild(elemento);

for (var i=0;i<cantidadArtefactos.length; i++){
    var option = document.createElement("option")
    option.value = cantidadArtefactos[i]
    option.text = cantidadArtefactos[i]
    elemento.appendChild(option)
}