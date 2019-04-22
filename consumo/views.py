from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "consumo/index.html")

def calculador(request):
    return render(request, "consumo/calculo.html")
