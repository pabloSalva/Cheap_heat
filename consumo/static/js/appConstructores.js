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

  $("#cargaMaterial").click(function(){
    $("#cargadeMaterial").text($("form").serialize());
    console.log("hola");
    
  });
  
//   $( "cargaMaterial" ).on( "submit", function( event ) {
//     event.preventDefault();
//     console.log( 'hola' +$( this ).serialize() );
//   });




//funcion que envìa los datos por post

// var url = 'https://example.com/profile';
// var data = {username: 'example'};

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), // data can be `string` or {object}!
//   headers:{
//     'Content-Type': 'application/json'
//   }
// }).then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));