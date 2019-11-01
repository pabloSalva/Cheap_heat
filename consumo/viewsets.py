from rest_framework import viewsets
from rest_framework.response import Response

from .models import Provincia,Partido,Localidad,Entidad,Tarifas,Artefacto,Material

from .serializer import PartidoSerializer,PartidoSerializer,LocalidadSerializer,EntidadSerializer,TarifasSerializer,ArtefactoSerializer,MaterialSerializer


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



    def Tarifa_entidad(self,request,pk):
        tarifas = Tarifas.objects.get(pk=pk)
       

        return Response(tarifas.data)

class MaterialesViewSet(viewsets.ModelViewSet):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer