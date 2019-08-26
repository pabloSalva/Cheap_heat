"""eficiencia URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from consumo import views

from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    
    
    #endPoint

    path('api/' ,include('consumo.urls') ),

    #pagina Principal
    path('index/',views.index, name="indice"),

    #calculos
    
    path('calculo/',views.calculador,name="calculo"),
    path('calculoGas',views.calculadorGas, name="calculoGas"),
    
    #registro usuario

    path('registrar/', views.RegistroUsiario.as_view(), name = "registroUsuario"),
    
    #urls de sugerencias

    path('sugerencias/', views.sugerenciaGas, name="sugerenciasGas"),
    path('general/',views.general,name="general"),
    path('cocina/',views.cocina,name="cocina"),
    path('agua/',views.agua,name="agua"),
    path('calefaccion/',views.calefaccion,name="calefaccion"),
    path('renovable/', views.renovable, name="renovable"),

]
