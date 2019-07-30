from django.db import models
from django.contrib.auth.models import User



# Create your models here.

class Provincia(models.Model):
    nombre_provincia=models.CharField(max_length=20)

class Partido(models.Model):
    nombre_partido=models.CharField(max_length=20)
    provincia=models.ForeignKey(Provincia,on_delete=models.CASCADE)

    

class Localidad(models.Model):
    nombre_localidad=models.CharField(max_length=20)
    partido=models.ForeignKey(Partido, on_delete=models.CASCADE)
    




class Entidad(models.Model):
    users=models.ManyToManyField(User, related_name=None)
    localidades=models.ManyToManyField(Localidad, related_name=None)
    nombre=models.CharField(max_length=30)
    tipo_entidad=models.CharField(max_length=20,default="electrica")

    def __str__(self):
        return self.nombre

class Tarifas(models.Model):
    entidad=models.ForeignKey(Entidad, on_delete=models.CASCADE,related_name=None)
    fech_ini=models.DateField()
    fech_fin=models.DateField()
    precioKwh=models.FloatField(default=0)
    codigo=models.CharField(max_length=20)
    desde=models.IntegerField(default=0)
    hasta=models.IntegerField(default=0)
    cargofijo=models.FloatField(default=0)
    tipo_tarifa=models.CharField(max_length=20,default="residencial")

    #def __str__(self):
     #  return "{}{}"

class Artefacto(models.Model):
    users=models.ManyToManyField(User, related_name=None)
    nombre_artefacto=models.CharField(max_length=20)
    consumo=models.IntegerField(default=0)
    eficiencia=models.CharField(max_length=4)
    categoria=models.CharField(max_length=20,default="Aires")
    descripcion=models.CharField(max_length=20)
    marca=models.CharField(max_length=20,default="S/N")
    modelo=models.CharField(max_length=20,default="S/N")
    tipo=models.CharField(max_length=20)

    def __str__(self):
        return "%s %s" % (self.nombre_artefacto,str(self.consumo))

