from django.shortcuts import render
from django.contrib.auth.models import User,Group
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.urls import reverse_lazy
from consumo.forms import RegistroForm


class RegistroUsiario(CreateView):
    model = User
    template_name = "usuario/registrar.html"
    form_class = RegistroForm
    success_url = reverse_lazy('indice')



def index(request):
    return render(request, "consumo/ppal.html")

def calculador(request):
    return render(request, "consumo/calculo.html")

def calculadorGas(request):
    return render(request, "consumo/calculoGas.html")    

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


#Pagina principal constructores

def construccion(request):
    return render(request, "Constructores/indexConstructor.html")      

def nueva(request):
    return render(request, "Constructores/nuevaVivienda.html")    