//direccionamiento a pagina de energías renovables

$('#renovables').on('click',function () {
    var url = "{% url 'renovable' %}"
    document.location.href = url
    
})