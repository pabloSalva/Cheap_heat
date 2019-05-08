from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "consumo/ppal.html")

def calculador(request):
    return render(request, "consumo/calculo.html")

def sugerenciaGas(request):
    return render(request, "consumo/sugerenciagas.html")

def general(request):
    return render(request , "consumo/general.html")   

def cocina(request):
    return render(request , "consumo/cocina.html") 

def agua(request):
    return render(request , "consumo/agua.html")   

def calefaccion(request):
    return render(request , "consumo/calefaccion.html") 
def renovable(request):
    return render(request, "consumo/renovable.html")
      