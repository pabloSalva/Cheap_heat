from rest_framework import routers

from .viewsets import ArtefactoViewSet, EntidadViewSet,ArtefactoElectricoViewSet,ArtefactoGasViewSet

router = routers.SimpleRouter()
router.register('artefactos',ArtefactoViewSet)
router.register('entidades',EntidadViewSet)
router.register('electricos',ArtefactoElectricoViewSet)
router.register('gas',ArtefactoGasViewSet)


urlpatterns = router.urls
