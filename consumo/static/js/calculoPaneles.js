//calculo de cantidad de paneles solares necesarios para x cantidad de kw

$('#cantPaneles').on('click',function () {
    

    var filas=document.querySelectorAll("#tabla #contenido tr");
    var total=0;
    
   
    for (let index = 0; index < filas.length; index++) {
        
        
       
        var columnas=$("#contenido tr:eq("+index+") td")
        console.log("columnas: " + columnas[index].textContent);

        var consumo=parseInt(columnas[3].textContent);

        total += consumo


    }  
    var ifoPanel = document.getElementById('infoPanel')
    console.log("total para paneles: " +total);

    if (total <= 1000 ) {
        console.log("total menor que 1000");
                
        ifoPanel.innerHTML = `<p class="text-secondary">El consumo es menor o igual a 1 kW por lo tanto con paneles que soporten picos 
                              máximo de 1000 Wh el sistema de paneles solares funcionaría eficientemente. </p>`
        
                              
        } else if (total <= 5000 ) {
            console.log("total menor que 5000 y mayor que 1000");
            ifoPanel.innerHTML = `<p class="text-secondary">El consumo está en el rango de 1kW y 5Kw por lo tanto con paneles que soporten picos 
                                    máximo de 5000 Wh el sistema de paneles solares funcionaría eficientemente. </p>`
           
        } else if (total <= 10000) {
            console.log("total entre 5000 y 10000");
            ifoPanel.innerHTML = `<p class="text-secondary">El consumo está en el rango de 5kw a 10kw lo tanto con paneles que soporten picos 
                                    máximo de 10000 Wh el sistema de paneles solares funcionaría eficientemente. </p>`
           
        } 
    else {
            ifoPanel.innerHTML = `EL CONSUMO SUPERA LOS 10000 WH`
            
    }
    var resultado3 = document.getElementById("panel")
    resultado3.innerHTML = `<img src="../static/img/iconoPanel.png" alt="">`
    resultado3.innerHTML += `<button align="left" class="btn btn-secondary float-left" id="renovables">Más acerca de Energías renovables</button>`

})

/*
switch (true) {
    case x > 0 && x < 10:
        alert("x > 0 && x < 10");
        break;
    case x > 0 && x < 20:
        alert("x > 0 && x < 20");
        break;
    case x < 0 || x > 100:
        alert("x < 0 || x > 10");
        break;
    default:
        alert("Ninguno");
}

*/