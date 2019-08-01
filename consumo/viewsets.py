from rest_framework import viewsets

from .models import Provincia,Partido,Localidad,Entidad,Tarifas,Artefacto

from .serializer import PartidoSerializer,PartidoSerializer,LocalidadSerializer,EntidadSerializer,TarifasSerializer,ArtefactoSerializer


class ArtefactoViewSet(viewsets.ModelViewSet):
    queryset= Artefacto.objects.all()
    serializer_class = ArtefactoSerializer
class EntidadViewSet(viewsets.ModelViewSet):
    queryset= Entidad.objects.all()
    serializer_class = EntidadSerializer 

class ArtefactoElectricoViewSet(viewsets.ModelViewSet):
    queryset=Artefacto.objects.filter(tipo__contains='electrico')
    serializer_class = ArtefactoSerializer

class ArtefactoGasViewSet(viewsets.ModelViewSet):
    queryset = Artefacto.objects.filter(tipo__contains='gas')
    serializer_class = ArtefactoSerializer


class TarifasViewSet(viewsets.ModelViewSet):
    queryset = Tarifas.objects.all()
    serializer_class = TarifasSerializer


    
