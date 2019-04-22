from rest_framework import viewsets

from .models import Provincia,Partido,Localidad,Entidad,Tarifas,Artefacto

from .serializer import PartidoSerializer,PartidoSerializer,LocalidadSerializer,EntidadSerializer,TarifasSerializer,ArtefactoSerializer


class ArtefactoViewSet(viewsets.ModelViewSet):
    queryset= Artefacto.objects.all()
    serializer_class = ArtefactoSerializer
class EntidadViewSet(viewsets.ModelViewSet):
    queryset= Entidad.objects.all()
    serializer_class = EntidadSerializer    