//aplicacion para crear nuevas viviendas

//funcion crear nuevo material. agrega un nuevo material a la lista de materiales disponibles

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })


  var formulario = document.getElementById('formulario1');  
  //console.log(formulario[0].value());
  

  formulario.addEventListener('submit',function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);

    // console.log(datos.get('nombre_material'));
    
    // datos.append("nombre_material":{})

  //   var datos = {
  //                username : "pablin",
  //                nombre_material : "ladrillo hueco",
  //                tipo : "Ladrillo",
  //                espesor : "0.18",
  //                transmitancia_termica : "0.48",
  //                estado : "Soldido",
  // }
    
    var url = 'http://localhost:8000/api/materiales/'

    fetch(url,{
      method:'POST',
      body:JSON.stringify(datos),
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error: ',error))
    .then(response => console.log('Success: ', response));
    console.log("datos: ",datos);
    
  });





  //$("#cargaMaterial").click(function(){
    
    
    //const data = new FormData(document.getElementById('formulario1'));
    //console.log(formData);
    
    //funcion que envìa los datos por post

    //var url = 'http://localhost:8000/api/materiales';
    //var formData = JSON.stringify($("#formulario1").serializeArray());
    //var data = {username: 'example'};

    //fetch(url, {
      // method: 'POST', // or 'PUT'
       //body: JSON.stringify(formData), // data can be `string` or {object}!
       //headers:{
      //'Content-Type': 'application/json'
      //}
    //}).then(res => res.json())
    //.catch(error => console.error('Error:', error))
    //.then(response => console.log('Success:', response));

    
    //$("#cargadeMaterial").text($("form").serialize());
    //console.log("hola");
    
  //});

 



