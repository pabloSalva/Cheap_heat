from rest_framework import routers

from .viewsets import ArtefactoViewSet, EntidadViewSet,ArtefactoElectricoViewSet,ArtefactoGasViewSet,TarifasViewSet,MaterialesViewSet

router = routers.SimpleRouter()
router.register('artefactos',ArtefactoViewSet)
router.register('entidades',EntidadViewSet)
router.register('electricos',ArtefactoElectricoViewSet)
router.register('gas',ArtefactoGasViewSet)
router.register('entidad',EntidadViewSet)
router.register('tarifas',TarifasViewSet)
router.register('materiales',MaterialesViewSet)






urlpatterns = router.urls
