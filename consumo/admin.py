from django.contrib import admin

from .models import Provincia,Partido,Localidad,Entidad,Tarifas,Artefacto

admin.site.register(Provincia)
admin.site.register(Partido)
admin.site.register(Localidad)
admin.site.register(Entidad)
admin.site.register(Tarifas)
admin.site.register(Artefacto)

