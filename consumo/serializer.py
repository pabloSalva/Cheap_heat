from rest_framework import serializers
from .models import Provincia,Partido,Localidad,Entidad,Tarifas,Artefacto,Material


class ProvinciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provincia
        fields = '__all__'

class PartidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partido
        fields = '__all__'

class LocalidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Localidad
        fields = '__all__'

class EntidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entidad
        fields = '__all__'  
class TarifasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarifas
        fields = '__all__'
class ArtefactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artefacto
        fields = '__all__'
class MaterialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Material
        fields = '__all__'
                



