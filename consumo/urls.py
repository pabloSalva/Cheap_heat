from rest_framework import routers

from .viewsets import ArtefactoViewSet, EntidadViewSet,ArtefactoElectricoViewSet,ArtefactoGasViewSet,TarifasViewSet

router = routers.SimpleRouter()
router.register('artefactos',ArtefactoViewSet)
router.register('entidades',EntidadViewSet)
router.register('electricos',ArtefactoElectricoViewSet)
router.register('gas',ArtefactoGasViewSet)
router.register('entidad',EntidadViewSet)
router.register('tarifas',TarifasViewSet)




urlpatterns = router.urls
