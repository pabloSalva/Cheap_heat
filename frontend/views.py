from django.shortcuts import render
from django.views.generic.detail import DetailView
from consumo.models import Material

def index(request):
    return render(request, 'frontend/index.html')

class MaterialDetailView(DetailView):
    model = Material
    template_name = 'frontend/index.html'    
    
